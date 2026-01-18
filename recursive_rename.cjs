
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const rootDir = 'public/screenshots';
const MAX_LENGTH = 50;
const renameMap = [];

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else {
            if (file.length > MAX_LENGTH) {
                const ext = path.extname(file);
                const nameWithoutExt = path.basename(file, ext);
                // Create a simple new name: first 20 chars + hash of full name
                const hash = crypto.createHash('md5').update(file).digest('hex').substring(0, 8);
                const newName = `${nameWithoutExt.substring(0, 20).trim()}-${hash}${ext}`;
                const newPath = path.join(dir, newName);

                fs.renameSync(fullPath, newPath);
                console.log(`RENAMED: "${fullPath}" -> "${newPath}"`);
                renameMap.push({ old: fullPath.replace(/\\/g, '/'), new: newPath.replace(/\\/g, '/') });
            }
        }
    }
}

walkDir(rootDir);
fs.writeFileSync('rename_log.json', JSON.stringify(renameMap, null, 2));
