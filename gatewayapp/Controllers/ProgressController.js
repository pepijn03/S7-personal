const axios = require('axios');

module.exports = {
    getAllProgress: function(req, res, next) {
        res.send('Here is the progress!');
    },

    getProgress: async function(req, res, next) {

        try {
            const progress = await axios.get('http://localhost:3002/progress');
            res.send(progress.data);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    }

}