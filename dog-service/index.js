const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/breeds', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v2/breeds');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching dog breeds');
    }
});

app.listen(port, () => {
    console.log(`Dog Service listening at http://localhost:${port}`);
});
