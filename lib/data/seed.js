const SeedData = require('../models/seed-data-model');
const chance = require('chance').Chance();

module.exports = async({ dataCount = 10 } = {}) => {
  const seedDataToInsert = [...Array(dataCount)]
    .map(() => ({
      data: `My Favorite Animal is: ${chance.animal()}`
    }));

  const insertedSeedData = await Promise.all(seedDataToInsert.map(data => SeedData.insert(data)));
};
