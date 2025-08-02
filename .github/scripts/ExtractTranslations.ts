const fs = require('fs');
const JSONData = fs.readFileSync('../../diff.json').toString();
const currentTranslations = JSON.parse(fs.readFileSync('./current_translations.json').toString());
let newStrings = [];

// Process _js instances
const patternJS = /_js\([^)]*\)/g;
const matchJS = JSONData.match(patternJS);
matchJS?.forEach((match) => {
   const delim = match.substring(4, 5);
   // TODO: This is shaky... what if \', is used in the string?
   const endOffset = match.indexOf(`${delim},`, 5);

  const token = match.substring(5, endOffset === -1 ? match.length - 2 : endOffset);
  if (!(token in currentTranslations.translations) && !newStrings.includes(match)) {
    newStrings.push(match);
  }
});

// Process ___p instances
const patternP = /___p\([^)]*\)/g;
const matchP = JSONData.match(patternP);
matchP?.forEach((match) => {
  // TODO: This doesn't work
  const token = match.substring(6, match.length - 2);
  if (!(token in currentTranslations.translations) && !newStrings.includes(match)) {
    newStrings.push(match);
  }

  // TODO: Extract the 2nd and 3rd params from the ___p text
  //       For each extracted
  //          Wrap in _js
  //          const matchJS = JSONData.match(patternJS);
});

const output = newStrings.join('\\n');
console.log(output);
