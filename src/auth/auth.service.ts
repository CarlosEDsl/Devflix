import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly userService: UsersService;
  private readonly jwtService: JwtService;

  constructor(userService: UsersService, jwtService: JwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  async login(loginDTO: LoginDTO) {
    const user = await this.userService.findByEmail(loginDTO.email);
    if (user && user.password === loginDTO.password) {
      const payload = { email: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}
