const axios = require('axios');

module.exports = {
    getUsers: async function(req, res, next) {
        try {
            const resp = await axios.get('http://localhost:3001/All');
            res.status(200).send(resp.data);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    }
};