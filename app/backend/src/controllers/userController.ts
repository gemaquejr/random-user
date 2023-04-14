import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
    constructor(private userService = new UserService()) { }

    async getUsers(_req: Request, res: Response) {
        try {
            const users = await this.userService.getUsers();
            return res.status(200).json(users);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving users' });
        }
    }
}