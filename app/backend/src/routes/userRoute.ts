import { Router } from 'express';
import UserController from '../controllers/userController';

const userRouter = Router();

const userController = new UserController();

userRouter.get('/', (req, res) => userController.getUsers(req, res));

export default userRouter;