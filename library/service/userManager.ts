import {User} from "../model/user";

export class UserManager {
    users: User[] = [];

    register(user: User) {
        this.users.push(user);
    }

    login(username: string, password: string): boolean {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username == username && this.users[i].password == password) {
                return true;
            }
        }
        return false;
    }
}