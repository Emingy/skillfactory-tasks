import { HttpException, Injectable, Inject, HttpStatus } from "@nestjs/common";
import { JwtService } from '../jwt/jwt.service';
import { SignIn } from './signin.interface';
import { getMongoManager } from "typeorm";
import { User as UserEntity } from "../../entities/user/user.entity";
import { UsersRepository } from "src/repositories/users.repository";

@Injectable()
export class SignInService {
    constructor(
        private tokenworker: JwtService,
        private usersRepository: UsersRepository
    ) {}


    async SignIn(signin: SignIn){
        const res = await this.usersRepository.signIn({ email: signin.login, password: signin.pass } );
        try{
            const payload = {
                file: res.file,
                name: res.name,
                birthDate: res.birthDate,
                email: res.email,
                planing: res.planing,
                mobile: res.mobile
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