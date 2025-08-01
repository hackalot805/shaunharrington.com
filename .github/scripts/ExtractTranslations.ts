const fs = require('fs');
const JSONData = fs.readFileSync('../../diff.json').toString();
const currentTranslations = JSON.parse(fs.readFileSync('./current_translations.json').toString());

console.log(JSONData);

const patternJS = /_js\([^)]*\)/g;
const patternP = /___p\([^)]*\)/g;

const matchJS = patternJS.exec(JSONData);
const matchP = patternP.exec(JSONData);

console.log(matchJS);

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

console.log(newStrings);
const output = newStrings.join(',');
console.log(output);
