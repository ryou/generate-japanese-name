const _ = require('lodash');
const firstNames = require('./data/first_name');
const lastNames = require('./data/last_name');

const generateJapaneseName = () => {
  const firstName = firstNames[_.random(0, firstNames.length - 1)];
  const lastName = lastNames[_.random(0, lastNames.length - 1)];

  return { firstName, lastName };
};

module.exports = generateJapaneseName;
