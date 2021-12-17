import { User } from './user.entity';
import { UserDto } from './userDto';
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';

@Injectable()
export class UserService {
  async addUser(user: UserDto): Promise<User> {
    let u = new User();
    u.email = user.email;
    u.firstName = user.firstName;
    u.lastName = user.lastName;

    return await getRepository(User).save(u);
  }

  async updateUser(userId: string, user: UserDto) {
    let u = new User();
    u.email = user.email;
    u.firstName = user.firstName;
    u.lastName = user.lastName;

    await getRepository(User).update(userId, u);
  }

  async deleteUser(userId: string) {
    return await getRepository(User).delete(userId);
  }

  async getUser(userId: string): Promise<User> {
    return await getRepository(User).findOne(userId);
  }
}
