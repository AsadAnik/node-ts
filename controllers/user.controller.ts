import { Request, Response, NextFunction } from 'express';
import catchAsyncErrorHandle from "../middleware/catchAsyncErrors";
import { ControllerFunction } from '../common/types';
import UserService from '../services/user.service';


class UserController {
    /**
     * ---- Uer Check Controller ----
     */
    static userCheck: ControllerFunction = catchAsyncErrorHandle(async (
        req: Request | any,
        res: Response,
        _next: NextFunction
    ) => {
        const { userId } = req.user;
        const user = await UserService.userCheck(userId);
        if (!user) return res.status(400).json({
            success: false,
            message: 'No User for Checks',
        });

        res.status(200).json({
            success: true,
            user,
        });
    });

    /**
     * ---- Logout Controller ----
     */
    static logout: ControllerFunction = catchAsyncErrorHandle(async (
        req: Request | any,
        res: Response,
        _next: NextFunction
    ) => {
        // res.cookie('token', null, {
        //     expires: new Date(Date.now()),
        //     httpOnly: true,
        // });

        const { userId } = req.user;

        const user = await UserService.logout(userId);
        if (!user) return res.status(400).json({
            success: false,
            message: 'No User Found to Logout!',
        });

        res.status(200).json({
            success: true,
            message: 'Logged Out',
            user
        });
    });
}

export default UserController;