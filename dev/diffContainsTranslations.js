const fs = require('fs');
const JSONData = fs.readFileSync('../.github/workflows/diff.json').toString();

const patternJS = /_js\([^)]*\)/g;
const matchJS = JSONData.match(patternJS);
const patternP = /___p\([^)]*\)/g;
const matchP = JSONData.match(patternP);

if (matchJS.length || matchP.length) {
   console.log('true');
}
console.log('false');
