
const fs = require('fs');
const path = require('path');

const rootDir = 'public';
const foundFiles = [];

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else {
            if (file.includes('#')) {
                foundFiles.push(fullPath);
                console.log(`FOUND: ${fullPath}`);
            }
        }
    }
}

walkDir(rootDir);
if (foundFiles.length === 0) {
    console.log("No files with '#' found.");
}
