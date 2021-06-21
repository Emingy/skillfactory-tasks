import axios from "axios";

export const getCar = () => new Promise( resolve => {
    let params = (new URL(document.location)).searchParams; 
    let url = `http://localhost:3000/car/${params.get("id")}`

    axios.get(url)
            .catch(()=>{
                throw new Error('Ошибка!')
            })
            .then(res=>res.data)
            .then(data=>{
                if(data.code=='200'){
                    resolve([data.data])
                }else{
                    throw new Error('Ошибка!')
                }
            });
    
});