const pool = require('../utils/pool');

module.exports = class Candidate {
  id;
  name;
  party;
  birthYear;
  winning;

  static async insert(candidate) {
    const { rows } = await pool.query(
      'INSERT INTO candidates (name, party, birth_year, winning) VALUES ($1, $2, $3, $4) RETURNING *', [candidate.name, candidate.party, candidate.birthYear, candidate.winning]
    );

    return new Candidate(rows[0]);
  };
};
