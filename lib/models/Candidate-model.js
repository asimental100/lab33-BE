const pool = require('../utils/pool');

module.exports = class Candidate {
  id;
  name;
  party;
  birthYear;
  winning;

  constructor(rows) {
    this.id = rows.id;
    this.name = rows.name;
    this.party = rows.party;
    this.birthYear = rows.birth_year;
    this.winning = rows.winning;
  };

  static async insert(candidate) {
    const { rows } = await pool.query(
      'INSERT INTO candidates ("name", party, birth_year, winning) VALUES ($1, $2, $3, $4) RETURNING *', [candidate.name, candidate.party, candidate.birthYear, candidate.winning]
    );

    return new Candidate(rows[0]);
  };
};
