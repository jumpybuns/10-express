const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Saboteur = require('../lib/models/Saboteur');

describe('Saboteurs tests yall', () => {
    beforeEach(() => {
      return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
    });
  
    afterAll(() => {
      return pool.end();
    });
  



it('gets a saboteur by ID via GET', async() => {
    const saboteur = await Saboteur.insert({
        meetingId: 
    })

    const response = await request(app)
    .get('/api/saboteurs/${saboteur.id}')

    expect(response.body).toEqual(saboteur);
})