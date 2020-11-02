const pool = require('../utils/pool');

module.exports = class SeedData {
  id;
  data;

  constructor(row) {
    this.id = row.id;
    this.data = row.data;
  }

  static async insert(data) {
    const { rows } = await pool.query(
      'INSERT INTO seed_data (id, "data") VALUES ($1, $2) RETURNING *', [data.id, data.data]
    );
      return new SeedData(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(
      'SELECT * FROM seed_data'
    );
      return rows.map(row => new SeedData(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM seed_data WHERE id=$1', [id]
    );
      return new SeedData(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM seed_data WHERE id=$1 RETURNING *', [id]
    );
      return new SeedData(rows[0]);
  }

  static async update(id, updatedData) {
    const { rows } = await pool.query(
      `UPDATE seed_data
        SET data=$1
      WHERE id=$2
      RETURNING *`,
      [updatedData.data, id]
    );
      return new SeedData(rows[0]);
  }
}
