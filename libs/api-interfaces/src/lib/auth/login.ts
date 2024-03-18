export const LOGIN_API = 'auth/login';
import { IsNotEmpty } from 'class-validator';

export class LoginRequest {
    
    @IsNotEmpty()
    username!: string;

    @IsNotEmpty()
    password!: string;

    remember!: boolean;
}

export interface LoginReponse {
    message: string;
}