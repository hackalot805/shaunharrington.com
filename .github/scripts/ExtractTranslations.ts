const fs = require('fs');
const JSONData = fs.readFileSync('../../diff.json').toString();
const currentTranslations = JSON.parse(fs.readFileSync('./current_translations.json').toString());

const patternJS = /_js\([^)]*\)/g;
const patternP = /___p\([^)]*\)/g;

const matchJS = JSONData.match(patternJS);
const matchP = JSONData.match(patternP);

let newStrings = [];
matchJS?.forEach((match) => {
  const token = match.substring(5, match.length - 2);
  if (!(token in currentTranslations.translations)) {
    newStrings.push(match);
  }
});
matchP?.forEach((match) => {
  const token = match.substring(6, match.length - 2);
  if (!(token in currentTranslations.translations)) {
    newStrings.push(match);
  }
});

const output = newStrings.join('\\n');
console.log(output);
