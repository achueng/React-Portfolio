//  Connect to db
const Contacts = require('../models/contacts');

module.exports = {
    postContacts: function(req, res) {
        Contacts.create(req.body)
            .then(dbContacts => {
                // send user's input to database
                res.json(dbContacts);
            })
            .catch(err => {
                res.status(404).json(err);
              });
    }
};