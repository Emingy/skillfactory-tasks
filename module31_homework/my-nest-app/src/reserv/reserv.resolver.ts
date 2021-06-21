import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AddReservInput } from 'src/graphql';
import { ReservService } from 'src/modules/reserv/reserv.service';

@Resolver()
export class ReservResolver {
    constructor(private readonly reservService: ReservService){}
    @Mutation()
    AddReserv(@Args('addReservInput') addReservInput:AddReservInput){
        console.log('add Reserv, ', addReservInput);
        return this.reservService.addReserv(addReservInput);
    }

    @Query()
    getReserv(@Args('id_user') id:string ){
        console.log('get Reserv by id_user, ', id);
        return this.reservService.getReserv(id);
    }
}
