const fs = require('fs');
const JSONData = process.env.JSON_DIFF;
const currentTranslations = JSON.parse(fs.readFileSync('./current_translations.json').toString());

const patternJS = /_js\([^)]*\)/;
const patternP = /___p\([^)]*\)/;

const matchJS = patternJS.exec(JSONData);
const matchP = patternP.exec(JSONData);

console.log(matchJS, matchP);

let newStrings = [];
matchJS.foreach((match) => {
  if (!(match in currentTranslations.translations)) {
    newStrings.push(match);
  }
});
matchP.foreach((match) => {
  if (!(match in currentTranslations.translations)) {
    newStrings.push(match);
  }
});

console.log(newStrings);
