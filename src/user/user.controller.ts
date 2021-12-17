import { UserService } from './user.service';
import { UserDto } from './userDto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from './user.entity';

@Controller('users')
export class UserCOntroller {
  constructor(private userService: UserService) {}

  @Post('add')
  async addUser(@Body() user: UserDto): Promise<User> {
    console.log(' ----- DANE ----- ', user);

    return await this.userService.addUser(user);
  }

  @Patch('update/:userId')
  async updateUser(@Body() user: UserDto, @Param('userId') userId: string) {
    console.log(' ----- DANE ----- ', userId);

    return await this.userService.updateUser(userId, user);
  }

  @Delete('delete/:userId')
  async deleteUser(@Param('userId') userId: string) {
    console.log(' ----- DANE ----- ', userId);

    await this.userService.deleteUser(userId);
  }

  @Get('get/:userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return await this.userService.getUser(userId);
  }
}
