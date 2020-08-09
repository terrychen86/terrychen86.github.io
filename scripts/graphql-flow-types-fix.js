/* eslint-disable */

const fs = require('fs');
const path = require('path');
const logSymbols = require('log-symbols');

const GRAPHQL_TYPE_PATH = path.resolve(__dirname, "../src/types/graphql.js");

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}

function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

async function removeDuplicateFlowAnnotation() {
  const data = await readFile(GRAPHQL_TYPE_PATH);
  const annotations = data.match(/\/\/\s\@flow/g);
  if (annotations == null || annotations.length <= 1) {
    return;
  }

  const fixedData = '// @flow\n\n' + data.replace(/\/\/\s\@flow/g, "");
  await writeFile(GRAPHQL_TYPE_PATH, fixedData);
}

removeDuplicateFlowAnnotation().then(() => {
  console.log(`  ${logSymbols.success}`, "Graphql Flow annotation is fixed");
});
