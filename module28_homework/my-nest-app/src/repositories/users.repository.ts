import { Injectable } from "@nestjs/common";
import { User } from "src/entities/user/user.entity";
import { SignUp } from "src/modules/signup/signup.interface";
import { getMongoRepository } from "typeorm";


@Injectable()
export class UsersRepository {
    async signIn(signin: {}){
        const repository = getMongoRepository(User);
        return await repository.findOne(signin);
    }
    async signUp(signup: SignUp){
        const repository = getMongoRepository(User);
        return await repository.save(signup);
    }
}