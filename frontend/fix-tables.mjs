import fs from 'fs';
import path from 'path';

function wrapTableInFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf-8');
    // We search for `<table ...>...</table>` but since it can be multiline, it's easier to just do:
    // replace `<table className="w-full text-left border-collapse">` with `<div className="overflow-x-auto"><table className="w-full text-left border-collapse min-w-[600px]">`
    // and `</table>` with `</table></div>` for those specific tables.
    // Actually, I can just use a simple regex replacement or do it with `replace_file_content` if I know the exact lines.
    
    content = content.replace(/<table className="w-full text-left border-collapse">/g, '<div className="overflow-x-auto">\n              <table className="w-full text-left border-collapse min-w-[800px]">');
    
    // We only want to close the div where the table closes. This might be tricky with regex if there are nested things, but tables don't usually nest here.
    content = content.replace(/<\/table>/g, '</table>\n            </div>');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${filePath}`);
  }
}

wrapTableInFile('app/admin/pengguna/page.tsx');
wrapTableInFile('app/admin/produk/page.tsx');
console.log('Script done.');
