/**
 * UpgradeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');
const filesPath = path.resolve('../backend/api/files');

module.exports = {
    addUpgrade: function (req, res) {
        if (req.isSocket) {
            const scriptPath = path.resolve('../backend/api/scripts/loop.py');
            const id = req.params.id;
            let upgradeId = "";

            Upgrade.create({ hapair: id }).fetch().then(upgrade => {
                upgradeId = upgrade.id;
                Upgrade.subscribe(req, [upgradeId]);
            });

            const process = spawn('python', [
                '-u',
                scriptPath,
            ]);

            process.stdout.on('data', data => {
                const lines = data.toString().split('\r\n').filter(elem => elem !== '');
                const lastLogMessage = lines.slice(-1)[0];
                Upgrade.update({ id: upgradeId }).set({ lastLogMessage: lastLogMessage }).then(() => {
                    Upgrade.publish([upgradeId], { verb: 'upgrade', lastLogMessage: lastLogMessage, id: upgradeId });
                });
            });

            process.stderr.on('data', data => {
                console.log(data.toString());
            });

            process.on('close', (code) => {
                Upgrade.unsubscribe(req, [upgradeId]);
            });

        }
    },
    generateDeviceInfo: function (req, res) {
        const haPairs = req.body;
        const pairs = {};
        for (let pair of haPairs) {
            pairs[pair.ha] = {
                primary: pair.primary,
                secondary: pair.secondary,
                name: pair.name,
                type: pair.type,
                id: pair.pid
            };
        }
        fs.writeFile(filesPath + "/device_info.json", JSON.stringify(pairs), (err) => {
            if (err) throw err;
            res.send("Success!");
        });
    },
    generateBaseDevice: function (req, res) {
        const info = req.body;
        fs.writeFile(filesPath + "/base_device.json", JSON.stringify(info), (err) => {
            if (err) throw err;
            res.send("Success!");
        });
    }
};

