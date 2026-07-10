import type { Response } from 'express';
import type { AuthRequest } from '../middleware/auth.js';
export declare const getAdminNotifications: (req: AuthRequest, res: Response) => Promise<void>;
export declare const markNotificationAsRead: (req: AuthRequest, res: Response) => Promise<void>;
export declare const markAllNotificationsAsRead: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=notifikasiController.d.ts.map