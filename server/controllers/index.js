var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log(res.json);
      // req.on('data', ()=>{
      //   console.log('data ');
      // })
      console.log(req.body);
      models.messages.get(function(body) {
        JSON.parse(body);
      });
      
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {  
      models.users.post(req.body.username);
      res.end();
    }
  }
};

