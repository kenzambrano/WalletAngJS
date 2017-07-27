import { Injectable } from '@angular/core';

import { User } from '../component/user/user';
import { USERS } from './mock-user';

@Injectable()

export class UserService{
    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getUsersSlowly(): Promise<User[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getUsers()), 2000);
        });
    }

    getUser(id: number): Promise<User> {
        return this.getUsers()
                   .then(users => users.find(user => user.id === id));
    }
}   