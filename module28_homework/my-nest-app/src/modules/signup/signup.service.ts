import { HttpException, Injectable, Inject, HttpStatus } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from "../mongoose/user.interface";
import { JwtService } from '../jwt/jwt.service';
import { SignUp } from './signup.interface';
import { getMongoManager } from "typeorm";
import { User as UserEntity } from "../../entities/user/user.entity";
import { UsersRepository } from "src/repositories/users.repository";

@Injectable()
export class SignUpService {
    constructor(
        private tokenworker: JwtService,
        private usersRepository: UsersRepository
    ) {}

    async SignUp(signup: SignUp){
        const newUser = new UserEntity();
        newUser.planing = signup.planing;
        newUser.name = signup.name;
        newUser.birthDate = signup.birthDate;
        newUser.email = signup.email;
        newUser.mobile = signup.mobile;
        newUser.passportSerialNumber = signup.passportSerialNumber;
        newUser.passportDateIssue = signup.passportDateIssue;
        newUser.passportIssuedBy = signup.passportIssuedBy;
        newUser.passportCode = signup.passportCode;
        newUser.driveSerialNumber = signup.driveSerialNumber;
        newUser.driveDateIssue = signup.driveDateIssue;
        newUser.password = signup.password;
        newUser.file = signup.file;

        const result = await this.usersRepository.signUp(newUser);

        // const newUser = new this.userModel(signup)
        // const result = await newUser.save();
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