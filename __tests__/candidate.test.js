const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Candidate = require('../lib/models/Candidate-model');

describe('Candidate Route', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('creates a candidate via POST route', () => {
    return request(app)
      .post('/api/v1/candidates')
      .send({
        name: 'Silvio Berlusconi',
        party: 'Bunga Bunga',
        birthYear: 1936,
        winning: false
      })
      .then(response => {
        expect(response.body).toEqual({
          id: expect.any(String),
          name: 'Silvio Berlusconi',
          party: 'Bunga Bunga',
          birthYear: 1936,
          winning: false
        });
      })
  });
});

