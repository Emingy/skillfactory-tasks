import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SignUpService } from "./signup.service";
import { SignUp } from './signup.interface';

@Controller('signup')
export class SignUpController {
    constructor(private signupService: SignUpService){}

    @Post()
    SignUp(@Body() signup: SignUp){
        console.log('Sign up, ', signup);
        return this.signupService.SignUp(signup);
    }
}