const express = require('express');

const app = express();
const port = 3001;

// Datos estáticos de razas de perros
const dogBreeds = [
    {
        id: '1',
        name: 'Labrador Retriever',
        description: 'The Labrador Retriever is a friendly and outgoing breed.',
        hypoallergenic: false
    },
    {
        id: '2',
        name: 'German Shepherd',
        description: 'The German Shepherd is a highly intelligent and versatile breed.',
        hypoallergenic: false
    },
    {
        id: '3',
        name: 'Golden Retriever',
        description: 'The Golden Retriever is a kind and gentle breed, great with families.',
        hypoallergenic: false
    }
];

// Endpoint para obtener todas las razas de perros
app.get('/breeds', (req, res) => {
    res.json(dogBreeds);
});

// Endpoint para obtener detalles de una raza de perro por ID
app.get('/breeds/:id', (req, res) => {
    const { id } = req.params;
    const breed = dogBreeds.find(b => b.id === id);
    if (!breed) {
        res.status(404).send('Breed not found');
    } else {
        res.json(breed);
    }
});

app.listen(port, () => {
    console.log(`Dog Service listening at http://localhost:${port}`);
});

