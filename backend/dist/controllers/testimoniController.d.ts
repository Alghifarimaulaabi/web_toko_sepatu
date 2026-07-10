import type { Response } from 'express';
import type { AuthRequest } from '../middleware/auth.js';
export declare const createTestimoni: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getTestimoniByProduk: (req: AuthRequest, res: Response) => Promise<void>;
export declare const checkUserReview: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getAllTestimoniAdmin: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getTestimoniByProdukAdmin: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteTestimoni: (req: AuthRequest, res: Response) => Promise<void>;
export declare const replyTestimoni: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=testimoniController.d.ts.map