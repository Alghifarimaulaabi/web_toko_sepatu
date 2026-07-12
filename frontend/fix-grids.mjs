import fs from 'fs';
import path from 'path';

function replaceInFile(filePath, searchRegex, replacement) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf-8');
    content = content.replace(searchRegex, replacement);
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${filePath}`);
  }
}

// 1. produk-pilihan/page.tsx
replaceInFile('app/produk-pilihan/page.tsx', 
  /className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"/, 
  'className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6"'
);
replaceInFile('app/produk-pilihan/page.tsx', 
  /className="relative h-56 rounded-2xl overflow-hidden mb-5 group shrink-0"/g, 
  'className="relative h-40 sm:h-56 rounded-2xl overflow-hidden mb-3 sm:mb-5 group shrink-0"'
);
replaceInFile('app/produk-pilihan/page.tsx', 
  /className="font-bold text-xl text-\[\#3E2723\] mb-1 line-clamp-1"/g, 
  'className="font-bold text-sm sm:text-xl text-[#3E2723] mb-1 line-clamp-1"'
);
replaceInFile('app/produk-pilihan/page.tsx', 
  /className="text-\[\#8D6E63\] font-semibold text-lg mb-5 flex-grow"/g, 
  'className="text-[#8D6E63] font-semibold text-sm sm:text-lg mb-3 sm:mb-5 flex-grow"'
);
replaceInFile('app/produk-pilihan/page.tsx', 
  /bg-\[\#white\] rounded-3xl p-5 shadow-sm/g, 
  'bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm'
);

// 2. trending/page.tsx (Assuming similar structure)
replaceInFile('app/trending/page.tsx', 
  /className="grid grid-cols-1 md:grid-cols-2 gap-8"/, 
  'className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8"'
);

// 3. ProductCarousel.tsx
replaceInFile('app/components/ProductCarousel.tsx', 
  /className="min-w-\[280px\] md:min-w-\[320px\] snap-start bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition duration-300 border border-\[\#D7CCC8\]\/50"/g, 
  'className="min-w-[160px] w-[calc(50%-8px)] sm:w-auto sm:min-w-[280px] md:min-w-[320px] snap-start bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm hover:shadow-xl transition duration-300 border border-[#D7CCC8]/50 flex flex-col"'
);
replaceInFile('app/components/ProductCarousel.tsx', 
  /className="relative h-64 rounded-2xl overflow-hidden mb-5 group"/g, 
  'className="relative h-40 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-5 group shrink-0"'
);
replaceInFile('app/components/ProductCarousel.tsx', 
  /className="font-bold text-xl text-\[\#3E2723\] mb-1 line-clamp-1"/g, 
  'className="font-bold text-sm sm:text-xl text-[#3E2723] mb-1 line-clamp-1"'
);
replaceInFile('app/components/ProductCarousel.tsx', 
  /className="text-\[\#8D6E63\] font-semibold text-lg mb-5"/g, 
  'className="text-[#8D6E63] font-semibold text-sm sm:text-lg mb-3 sm:mb-5 flex-grow"'
);
// Make the bottom container flex-grow
replaceInFile('app/components/ProductCarousel.tsx', 
  /<div>\s*<h3 className="font-bold text-sm sm:text-xl text-\[\#3E2723\] mb-1 line-clamp-1"/,
  '<div className="flex flex-col flex-grow">\n                <h3 className="font-bold text-sm sm:text-xl text-[#3E2723] mb-1 line-clamp-1"'
);

// 4. TrendingCard.tsx
replaceInFile('app/components/TrendingCard.tsx', 
  /className="grid grid-cols-1 md:grid-cols-2 gap-8"/, 
  'className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8"'
);
replaceInFile('app/components/TrendingCard.tsx', 
  /className="relative h-\[400px\] md:h-\[450px\] rounded-3xl overflow-hidden group shadow-lg shadow-\[\#4E342E\]\/10"/g, 
  'className="relative h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-lg shadow-[#4E342E]/10"'
);

console.log('Script done.');
