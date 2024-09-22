const { text } = require('express');
const {getUsers} = require('../../Controllers/usersController.js');

test('Return string: "Here are the users!"', () => {
    const req = {};

    const res = { text: '',
        send: function(text) {
            this.text = text;
        }
     };

    getUsers(req, res);
    
    expect(res.text).toBe('Here are the users!');
});