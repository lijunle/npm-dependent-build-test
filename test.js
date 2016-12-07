const fs = require('fs');
const path = require('path');
const assert = require('assert');

function getPackageVersion(packagePath) {
  const packageContent = fs.readFileSync(packagePath);
  const packageJson = JSON.parse(packageContent);
  return packageJson.version;
}

const actualFilePath = require.resolve('dependent-build/package.json');
const actualVersion = getPackageVersion(actualFilePath);

const cwd = process.cwd();
const expectedFolder = process.argv[2] || '';

if (expectedFolder) {
  const expectedVersion = getPackageVersion(path.resolve(cwd, expectedFolder, 'package.json'));
  assert.equal(actualVersion, expectedVersion);
}

console.log('Version of dependent-build/package.json:', actualVersion); // eslint-disable-line no-console
