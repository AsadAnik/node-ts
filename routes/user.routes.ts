import { Router } from 'express';
import UserController from '../controllers/user.controller';
const router = Router();

/**
 * ==== Login Route ====
 */
router.get('/check', UserController.userCheck);

/**
 * ==== Logout Route ====
 */
router.get('/logout', UserController.logout);


export default router;
