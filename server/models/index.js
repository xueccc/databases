var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('==============++> get model');
    }, // a function which produces all the messages
    post: function (message) {
      db.query(
        `INSERT INTO messages (text, room, username) VALUES ("${message.message}", "${message.roomname}", "${message.username}");`,
        (err, results) =>{ console.log(results.length); }
      );
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      db.connect();
      db.query('INSERT INTO users (name) VALUES ("' + username + '");', (err, result) => console.log('added user'));
    }
  }
};

