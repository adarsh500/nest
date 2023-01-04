import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
    signin() {
        return 'i have signedin'

    }

    signup() {
        return ({ hello: 'there' })

    }
}