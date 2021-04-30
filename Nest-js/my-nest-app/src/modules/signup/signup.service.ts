import { HttpException, Injectable, Inject, HttpStatus } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from "../mongoose/user.interface";
import { JwtService } from '../jwt/jwt.service';
import { SignUp } from './signup.interface';

@Injectable()
export class SignUpService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        private tokenworker: JwtService
    ) {}

    async SignUp(signup: SignUp){
        const newUser = new this.userModel(signup)
        const result = await newUser.save();
        console.log(result);
        try{
            const payload = {
                file: result.file,
                name: result.name,
                birthDate: result.birthDate,
                email: result.email,
                planing: result.planing,
                mobile: result.mobile
            }
            const genToken = await this.tokenworker.generate(payload);
            return {
                code: 200,
                accessToken: genToken.accessToken,
                refreshToken: genToken.refreshToken
            }
        } catch {
            throw new HttpException({
                "status": 400,
                "error": "This is a custom message"
            }, HttpStatus.BAD_REQUEST);
        }
    }
}