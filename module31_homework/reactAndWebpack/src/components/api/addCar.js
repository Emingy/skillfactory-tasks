import axios from "axios";

export const addCar = (data) => new Promise( resolve => {
    console.log(data)
    const toDb = {
        brand: data.data[0].brand,
        model: data.data[0].model,
        yearIssue: data.data[0].yearIssue,
        governmentNumber: data.data[0].governmentNumber,
        vin: data.data[0].vin,
        color: data.data[0].color,
        Enginefuel: data.data[0].Enginefuel,
        Enginevolume: data.data[0].Enginevolume,
        Enginepower: data.data[0].Enginepower,
        transmission: data.data[0].transmission,
        mileage: data.data[0].mileage,
        VPSerialAndNumber: data.data[0].VPSerialAndNumber,
        VRCSerialAndNumber: data.data[0].VRCSerialAndNumber,
        PriceOne: data.data[0].PriceOne,
        PriceTwo: data.data[0].PriceTwo,
        PriceThree: data.data[0].PriceThree,
        Osago: data.data[0].Osago,
        Kasko: data.data[0].Kasko,
        Options: data.data[0].Options,
        AdditionalServices: data.data[0].AdditionalServices,
        photosAuto: data.data[0].photosAuto,
        photosDoc: data.data[0].photosDoc,
    }
    console.log(toDb)
    let url = `http://localhost:3000/addcar`

    axios.post(url, toDb)
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