const { server } = require('../src/app');
const session = require('supertest');
const request = session(server);

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await request.get('/rickandmorty/character/1').expect(200);
        });
    });
});


// it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
//     const response =  await request.get('/rickandmorty/character/23');
//     const props = ['id', 'name', 'species', 'gender', 'status', 'origin', 'image'];

//     props.forEach(prop => {
//         expect(response.body).toHaveProperty(prop)
//     });
// });

// it('si hay un error responde con status: 500', async () => {
//     const response =  await request.get('/rickandmorty/character/900');
//     expect(response.statusCode).toBe(500);

// })