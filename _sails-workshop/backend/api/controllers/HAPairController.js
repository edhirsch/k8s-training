/**
 * HAPairController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getHAPairs: function (req, res) {
        HAPair.find().then(response => {
            res.send(response);
        })
    }
};
