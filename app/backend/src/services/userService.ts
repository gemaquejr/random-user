import User from '../database/models/user';

export default class UserService {
    public userModel = User;

    public async getUsers() {
        const result = await this.userModel.findAll();
        return result;
    }
}