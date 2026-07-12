import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'app/checkout/page.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Add import if not exists
if (!content.includes('import { toast } from "sonner";')) {
  content = content.replace('import { getProfile } from "../services/profileService";', 'import { getProfile } from "../services/profileService";\nimport { toast } from "sonner";');
}

// Replace alerts
content = content.replace('alert("Silakan login terlebih dahulu untuk melakukan checkout.");', 'toast.error("Silakan login terlebih dahulu untuk melakukan checkout.");');
content = content.replace('alert("Pembayaran berhasil!");', 'toast.success("Pembayaran berhasil!");');
content = content.replace('alert("Pembayaran sedang diproses. Silakan selesaikan pembayaran.");', 'toast.info("Pembayaran sedang diproses. Silakan selesaikan pembayaran.");');
content = content.replace('alert("Pembayaran gagal! Silakan coba lagi.");', 'toast.error("Pembayaran gagal! Silakan coba lagi.");');
content = content.replace('alert("Anda menutup popup pembayaran. Pesanan tetap bisa dibayar nanti.");', 'toast.warning("Anda menutup popup pembayaran. Pesanan tetap bisa dibayar nanti.");');
content = content.replace('alert("Pesanan COD berhasil dibuat!");', 'toast.success("Pesanan COD berhasil dibuat!");');
content = content.replace('alert(err.message || "Terjadi kesalahan saat memproses pesanan. Silakan coba lagi.");', 'toast.error(err.message || "Terjadi kesalahan saat memproses pesanan. Silakan coba lagi.");');

fs.writeFileSync(filePath, content);
console.log('Replaced alerts in checkout/page.tsx');
