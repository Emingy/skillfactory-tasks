import { useQuery } from "@apollo/react-hooks";
import axios from "axios";
import { GET_CARS } from "../../utils/graphql-requests";

export const getCars = () => new Promise( resolve => {
    const data = Car
    let url = `http://localhost:3000/searchCar?price=${params.get("price")}&transmission=${params.get("transmission")}&drive=${params.get("drive")}&engine=${params.get("engine")}`

    axios.get(encodeURI(url))
            .catch(()=>{
                throw new Error('Ошибка!')
            })
            .then(res=>res.data)
            .then(data=>{
                if(data.code=='200'){
                    resolve(data.data)
                }else{
                    throw new Error('Ошибка!')
                }
            });
    
    resolve(cars)
});