import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SignInService } from "./signin.service";
import { SignIn } from './signin.interface';

@Controller('signin')
export class SignInController {
    constructor(private signinService: SignInService){}

    @Post()
    SignIn(@Body() signin: SignIn){
        console.log('Sign in, ', signin);
        return this.signinService.SignIn(signin);
    }
}