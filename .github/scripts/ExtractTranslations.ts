    const fs = require('fs');
    const filePath = './diff.json'; // Relative to the working directory
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log(fileContent);
