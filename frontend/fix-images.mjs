import fs from 'fs';
import path from 'path';

function walkDir(dir) {
    let files = [];
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            files = files.concat(walkDir(dirPath));
        } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
            files.push(dirPath);
        }
    });
    return files;
}

const files = walkDir('d:\\web_toko_sepatu\\frontend\\app');
let modifiedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace \`http://localhost:5000\${variable}\` with variable
    // This matches things like \`http://localhost:5000\${p.gambar}\`
    content = content.replace(/`http:\/\/localhost:5000\$\{([^}]+)\}`/g, '$1');
    
    // Replace \`http://localhost:5000\${variable}\` inside src="" if any left
    // Actually the above regex catches it since it has backticks.
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        modifiedFiles++;
        console.log(`Modified: ${file}`);
    }
});

console.log(`Done! Modified ${modifiedFiles} files.`);
