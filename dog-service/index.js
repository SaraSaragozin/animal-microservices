const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

const DOG_API_URL = 'https://dogapi.dog/api/v2/breeds';

app.get('/breeds', async (req, res) => {
    try {
        const response = await axios.get(DOG_API_URL);
        res.json(response.data.data);
    } catch (error) {
        console.error('Error fetching dog breeds:', error);
        res.status(500).send('Error fetching dog breeds');
    }
});

app.listen(port, () => {
    console.log(`Dog Service listening at http://localhost:${port}`);
});
