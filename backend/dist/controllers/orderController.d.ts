import type { Response } from 'express';
import type { AuthRequest } from '../middleware/auth.js';
export declare const getAllOrders: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getUserOrders: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getOrderDetail: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateOrderStatus: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateOrderStatusByKode: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getOrderStats: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getDashboardSummary: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=orderController.d.ts.map