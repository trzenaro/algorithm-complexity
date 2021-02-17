const path = require('path');
const fsPromises = require('fs').promises;

module.exports = async (name, value) => {
  await fsPromises.writeFile(path.join(__dirname, name), JSON.stringify(value));
}