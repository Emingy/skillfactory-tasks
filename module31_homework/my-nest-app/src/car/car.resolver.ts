import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetCarsInput } from 'src/graphql';
import { SearchCarService } from 'src/modules/searchCar/searchCar.service';

@Resolver()
export class CarResolver {
    constructor(private readonly searchCarService: SearchCarService){}
    @Query()
    Car(@Args('getCarsInput') getCarsInput:GetCarsInput){
        console.log('search car, ', getCarsInput);
        return this.searchCarService.searchCar(getCarsInput);
    }
}
