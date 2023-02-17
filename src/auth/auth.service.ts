import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signin() {
        return { msg: 'I have Signed in' }
    }


    signup() {
        return { msg: 'I have Signed Up' }
    }

}

const service = new AuthService();