const fs = require('fs');
const JSONData = process.env.JSON_DIFF;
const currentTranslations = JSON.parse(fs.readFileSync('./current_translations.json').toString());

const patternJS = /_js\([^)]*\)/g;
const patternP = /___p\([^)]*\)/g;

const matchJS = patternJS.exec(JSONData);
const matchP = patternP.exec(JSONData);

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
