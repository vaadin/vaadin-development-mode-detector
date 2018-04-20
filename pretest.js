const fs = require('fs');

// copy the file into bower_components to make bundling work
const buildPath = './bower_components/vaadin-development-mode-detector';
const component = 'vaadin-development-mode-detector.html';

function createDir(dirname) {
  try {
    fs.mkdirSync(dirname);
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

createDir(buildPath);

fs.writeFileSync(`${buildPath}/${component}`, fs.readFileSync(component));
