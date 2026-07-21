/**
 * Login Rate Limiter Middleware
 * 
 * Membatasi percobaan login gagal berulang kali per IP + email.
 * - Maksimal 5 percobaan gagal dalam 15 menit
 * - Setelah 5x gagal, akun di-lock selama 15 menit
 * - Counter di-reset setelah login berhasil
 */

interface LoginAttempt {
  count: number;
  firstAttempt: number;
  lockedUntil: number | null;
}

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 menit
const LOCK_DURATION_MS = 15 * 60 * 1000; // 15 menit lockout

// In-memory store: key = "ip:email"
const loginAttempts = new Map<string, LoginAttempt>();

// Bersihkan entry lama setiap 30 menit
setInterval(() => {
  const now = Date.now();
  for (const [key, attempt] of loginAttempts.entries()) {
    const isWindowExpired = (now - attempt.firstAttempt) > WINDOW_MS;
    const isLockExpired = attempt.lockedUntil && now > attempt.lockedUntil;
    if (isWindowExpired && (!attempt.lockedUntil || isLockExpired)) {
      loginAttempts.delete(key);
    }
  }
}, 30 * 60 * 1000);

function getKey(ip: string, email: string): string {
  return `${ip}:${email.toLowerCase().trim()}`;
}

/**
 * Cek apakah login attempt diblokir. Dipanggil SEBELUM proses login.
 * Mengembalikan { blocked, retryAfter, remainingAttempts }
 */
export function checkLoginAttempt(ip: string, email: string): {
  blocked: boolean;
  retryAfter: number; // detik sampai bisa coba lagi
  remainingAttempts: number;
} {
  const key = getKey(ip, email);
  const attempt = loginAttempts.get(key);
  const now = Date.now();

  if (!attempt) {
    return { blocked: false, retryAfter: 0, remainingAttempts: MAX_ATTEMPTS };
  }

  // Cek apakah sedang di-lock
  if (attempt.lockedUntil && now < attempt.lockedUntil) {
    const retryAfter = Math.ceil((attempt.lockedUntil - now) / 1000);
    return { blocked: true, retryAfter, remainingAttempts: 0 };
  }

  // Cek apakah lock sudah expired -> reset
  if (attempt.lockedUntil && now >= attempt.lockedUntil) {
    loginAttempts.delete(key);
    return { blocked: false, retryAfter: 0, remainingAttempts: MAX_ATTEMPTS };
  }

  // Cek apakah window sudah expired -> reset
  if ((now - attempt.firstAttempt) > WINDOW_MS) {
    loginAttempts.delete(key);
    return { blocked: false, retryAfter: 0, remainingAttempts: MAX_ATTEMPTS };
  }

  const remaining = MAX_ATTEMPTS - attempt.count;
  return { blocked: false, retryAfter: 0, remainingAttempts: Math.max(remaining, 0) };
}

/**
 * Catat percobaan login gagal.
 * Mengembalikan { locked, retryAfter, remainingAttempts }
 */
export function recordFailedLogin(ip: string, email: string): {
  locked: boolean;
  retryAfter: number;
  remainingAttempts: number;
} {
  const key = getKey(ip, email);
  const now = Date.now();
  let attempt = loginAttempts.get(key);

  if (!attempt || (now - attempt.firstAttempt) > WINDOW_MS) {
    attempt = { count: 1, firstAttempt: now, lockedUntil: null };
    loginAttempts.set(key, attempt);
    return { locked: false, retryAfter: 0, remainingAttempts: MAX_ATTEMPTS - 1 };
  }

  attempt.count += 1;

  if (attempt.count >= MAX_ATTEMPTS) {
    attempt.lockedUntil = now + LOCK_DURATION_MS;
    loginAttempts.set(key, attempt);
    const retryAfter = Math.ceil(LOCK_DURATION_MS / 1000);
    return { locked: true, retryAfter, remainingAttempts: 0 };
  }

  loginAttempts.set(key, attempt);
  return { locked: false, retryAfter: 0, remainingAttempts: MAX_ATTEMPTS - attempt.count };
}

/**
 * Reset counter setelah login berhasil.
 */
export function resetLoginAttempts(ip: string, email: string): void {
  const key = getKey(ip, email);
  loginAttempts.delete(key);
}
