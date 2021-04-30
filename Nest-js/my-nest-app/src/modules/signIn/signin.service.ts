import { HttpException, Injectable, Inject, HttpStatus } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from "../mongoose/user.interface";
import { JwtService } from '../jwt/jwt.service';
import { SignIn } from './signin.interface';

@Injectable()
export class SignInService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        private tokenworker: JwtService
    ) {}


    async SignIn(signin: SignIn){
        // const newUser = new this.userModel({
        //     planing: 'String',
        //     name: 'String',
        //     birthDate: '2021-01-01T00:00:00.000+00:00',
        //     email: 'String',
        //     mobile: 1,
        //     passportSerialNumber: 1,
        //     passportDateIssue: '2021-01-01T00:00:00.000+00:00',
        //     passportIssuedBy: 'String',
        //     passportCode: 1,
        //     driveSerialNumber: 1,
        //     driveDateIssue: '2021-01-01T00:00:00.000+00:00',
        //     password: 'String',
        //     file:[],
        // })
        // const result = await newUser.save();
        // console.log(result);
        const res = await this.userModel.find({ email: signin.login, password: signin.pass } );
        try{
            const payload = {
                file: res[0].file,
                name: res[0].name,
                birthDate: res[0].birthDate,
                email: res[0].email,
                planing: res[0].planing,
                mobile: res[0].mobile
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