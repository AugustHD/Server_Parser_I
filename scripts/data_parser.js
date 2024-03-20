const fs = require('fs');
const csvParser = require('csv-parser');
const yaml = require('js-yaml');
const xml2js = require('xml2js');

const csvFile = 'data.csv';
const jsonFile = 'data.json';
const yamlFile = 'data.yaml';
const txtFile = 'data.txt';
const xmlFile = 'data.xml';

function parseCSV() {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(csvFile)
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', reject);
    });
}

function parseJSON() {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonFile, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(data));
        });
    });
}

function parseYAML() {
    return new Promise((resolve, reject) => {
        fs.readFile(yamlFile, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(yaml.load(data));
        });
    });
}

function parseTXT() {
    return new Promise((resolve, reject) => {
        fs.readFile(txtFile, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

function parseXML() {
    return new Promise((resolve, reject) => {
        fs.readFile(xmlFile, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            xml2js.parseString(data, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    });
}

// Usage
parseTXT()
    .then(console.log)
    .catch(console.error);

parseCSV()
    .then(console.log)
    .catch(console.error);

parseYAML()
    .then(console.log)
    .catch(console.error);

parseXML()
    .then(console.log)
    .catch(console.error);

parseJSON()
    .then(console.log)
    .catch(console.error);
