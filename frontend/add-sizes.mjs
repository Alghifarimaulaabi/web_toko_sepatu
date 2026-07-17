import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

const dir = 'd:/web_toko_sepatu/frontend/app';

walkDir(dir, (filePath) => {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        content = content.replace(/(<Image[^>]*?\b)fill(\b[^>]*?>)/g, (match, p1, p2) => {
            if (match.includes('sizes=')) return match;
            modified = true;
            return `${p1}fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"${p2}`;
        });
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
});
