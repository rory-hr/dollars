const fs = require('fs');
const { years } = require('./data.gen');

const data = JSON.stringify(years());

fs.writeFile('./utils/data.json', data, (err) => {
  if (err) {
    console.error(`Failed to write new data file:\n${err}`);
  } else {
    console.log('Successfully wrote new data file!');
  }
});