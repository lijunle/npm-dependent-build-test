const assert = require('assert');
const path = require('path');

const cwd = process.cwd();
const expectedFolder = process.argv[2] || '';
const expectedFilePath = path.resolve(cwd, expectedFolder, 'package.json');
const actualFilePath = require.resolve('dependent-build/package.json');

if (expectedFolder) {
  assert.equal(actualFilePath, expectedFilePath);
}

console.log('Path of dependent-build/package.json:');
console.log(actualFilePath);
