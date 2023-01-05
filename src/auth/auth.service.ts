import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {

    signup() {
        return 'signed in';
    }

    signin() {
        return 'dumbass';
    }
}  