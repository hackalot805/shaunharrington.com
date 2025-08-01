const fs = require('fs');
const JSONData = fs.readFileSync('../../diff.json').toString();
const currentTranslations = JSON.parse(fs.readFileSync('./current_translations.json').toString());
let newStrings = [];

// Process _js instances
const patternJS = /_js\([^)]*\)/g;
const matchJS = JSONData.match(patternJS);
matchJS?.forEach((match) => {
  console.log(match);
  // TODO: match.length - 2 is wrong, we might be passing params
  //       Find the char after the first param, if ')' we are good to go, if ',' we need to truncate and replace with ')'
  const token = match.substring(5, match.length - 2);
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
  //          Wrap in _js(...)
  //          const matchJS = JSONData.match(patternJS);
});

const output = newStrings.join('\\n');
console.log(output);
