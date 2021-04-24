module.exports.connections = {
  mongo: {
     adapter: 'sails-mongo',
     url: process.env.MONGO_URL ||
         'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT ||
         'mongodb://localhost/messageApp'
  }
};
