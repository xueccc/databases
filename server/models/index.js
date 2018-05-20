var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // console.log('==============++> get model');
      db.query('SELECT * FROM messages', function(err, response, body) {
        console.log('get body', body);
      });
    }, // a function which produces all the messages
    post: function (message) {
      //check if username exist in user table
      var userPromise = new Promise(function(resolve, reject) {
        db.query(`INSERT INTO users (name)
        SELECT * FROM (SELECT "${message.username}") AS tmp
        WHERE NOT EXISTS (
          SELECT name FROM users WHERE name = "${message.username}"
        ) LIMIT 1;
        `);
      });
      //check if room exist in room table
      db.query(`INSERT INTO rooms (name)
        SELECT * FROM (SELECT "${message.roomname}") AS tmp
        WHERE NOT EXISTS (
          SELECT name FROM users WHERE name = "${message.roomname}"
        ) LIMIT 1;
        `);
     
      //insert row to message table
      db.query(
        `INSERT INTO messages (text, room, userid) VALUES (
          "${message.message}", 
          
          select id from rooms where name = "${message.roomname}", 
        
          select id from users where name = "${message.username}"
        );`,
        (err, results) =>{ console.log('message added'); }
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

