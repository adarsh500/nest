import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from "@nestjs/common";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() body: AuthDto) {
        console.log(body)
        return this.authService.signup();
    }

    @Post('signin')
    signin(@Body() body: AuthDto) {
        console.log(body)
        return this.authService.signin();
    }
}