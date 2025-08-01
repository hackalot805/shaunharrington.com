const fs = require('fs');
const JSONData = process.env.JSON_DIFF;
console.log(JSONData);

const patternJS = /_js\([^)]*\)/;
const patternP = /___p\([^)]*\)/;

const matchJS = patternJS.exec(JSONData);
const matchP = patternP.exec(JSONData);

console.log(matchJS, matchP);
// Use regex to exctract `_js` and `___p` instances.
