
const fs = require('fs');
const path = require('path');

const publicDir = 'd:\\NEXEN\\Nexen-Projects\\DRIZZL\\public';
const files = fs.readdirSync(publicDir);

files.forEach(file => {
    const filePath = path.join(publicDir, file);
    const stats = fs.statSync(filePath);
    if (stats.size > 1024 * 1024) { // > 1MB
        console.log(`${file}: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
    }
});
