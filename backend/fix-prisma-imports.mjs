import fs from 'fs';
import path from 'path';

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('../../generated/prisma/client.js')) {
        content = content.replace(/['"]\.\.\/\.\.\/generated\/prisma\/client\.js['"]/g, "'@prisma/client'");
        fs.writeFileSync(fullPath, content);
        console.log('Fixed:', fullPath);
      } else if (content.includes('../generated/prisma/client.js')) {
        content = content.replace(/['"]\.\.\/generated\/prisma\/client\.js['"]/g, "'@prisma/client'");
        fs.writeFileSync(fullPath, content);
        console.log('Fixed:', fullPath);
      }
    }
  }
}

traverse(path.join(process.cwd(), 'src'));
console.log('Done.');
