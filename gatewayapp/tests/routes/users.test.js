const { text } = require('express');
const { getStatus } = require('../../Controllers/indexController');

test('Return string: "Gateway API running!"', () => {
    const req = {};
    const res = { text: '',
        send: function(text) {
            this.text = text;
        }
     };
    getStatus(req, res);
    
    expect(res.text).toBe('Gateway API running!');
});