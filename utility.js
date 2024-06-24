'use strict';

const fs = require('fs');

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const writeFile = (fileName, programName) => {
    // do work
    const today = new Date();
    const fileLine = `\n\nhello from the ${programName} program ${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;
    fs.appendFileSync(fileName, fileLine, (err) => {
        if (err) {
            console.error(err);
        }
    });
};

const outputFile = (fileName) => {
    // originally copied from https://nodejs.dev/en/learn/reading-files-with-nodejs
    // write out file contents to screen
    console.log('\n\n final contents of file');
    try {
        const fileContents = fs.readFileSync(fileName, 'utf8');
        console.log(fileContents);
    } catch (error) {
        console.error(error);
    }
};

const exampleFile = 'files/HelloWorld.txt';

module.exports.sleep = sleep;
module.exports.exampleFile = exampleFile;
module.exports.writeFile = writeFile;
module.exports.outputFile = outputFile;
