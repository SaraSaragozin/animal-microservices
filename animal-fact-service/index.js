const express = require('express');

const app = express();
const port = 3003;

const animalFacts = [
    "A group of cats is called a clowder.",
    "Dogs have three eyelids.",
    "A snail can sleep for three years.",
    "An ostrich's eye is bigger than its brain.",
    "Elephants are the only animal that can't jump."
];

app.get('/fact', (req, res) => {
    const randomFact = animalFacts[Math.floor(Math.random() * animalFacts.length)];
    res.json({ fact: randomFact });
});

app.listen(port, () => {
    console.log(`Animal Fact Service listening at http://localhost:${port}`);
});
 