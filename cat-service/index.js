const express = require('express');

const app = express();
const port = 3002;

app.get('/status/:code', (req, res) => {
    const { code } = req.params;
    res.redirect(`https://http.cat/${code}`);
});

app.listen(port, () => {
    console.log(`Cat Service listening at http://localhost:${port}`);
});
 