const fs = require('fs');
const JSONData = fs.readFileSync('../../diff.json').toString();
const currentTranslations = JSON.parse(fs.readFileSync('./current_translations.json').toString());

const patternJS = /_js\([^)]*\)/g;
const patternP = /___p\([^)]*\)/g;

const matchJS = patternJS.match(JSONData);
const matchP = patternP.match(JSONData);

let newStrings = [];
matchJS?.forEach((match) => {
  if (!(match in currentTranslations.translations)) {
    newStrings.push(match);
  }
});
matchP?.forEach((match) => {
  if (!(match in currentTranslations.translations)) {
    newStrings.push(match);
  }
});

const output = newStrings.join(',');
console.log(output);
