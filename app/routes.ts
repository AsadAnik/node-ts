import express, { Request, Response } from 'express';
import authRoutes from '../routes/auth.routes';

const router = express.Router();

// Includes Routes..
router.use('/api/v1/auth', authRoutes);

/**
 * ==== Health Checking API Endpoint ====
 */
router.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Success'
    });
});

/**
 * ==== 404 Resource Not Found =====
 */
router.get('*', (_req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Resource not found!",
    });
});


export default router;
