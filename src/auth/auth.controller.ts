import { AuthService } from './auth.service';
import { Controller, Post } from "@nestjs/common";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }

    @Post('signup')
    signup() {
        this.authService.signup()
    }

    @Post('signin')
    signin() {
        this.authService.signin()
    }
}