const dao = require('./dao-searchCar');
module.exports.searchCarService = async function(data){
    let filter = {}
    if(data.price!="all"){
        filter = Object.assign({price1: data.price})
    }
    if(data.transmission!="all"){
        filter = Object.assign({transmission: data.transmission})
    }
    if(data.drive!="all"){
        filter = Object.assign({drive: data.drive})
    }
    if(data.engine!="all"){
        filter = Object.assign({engineFuel: data.engine})      
    }
    const res = await dao.searchCarDao(filter);
    if(res.code==200){
        return {
            code: 200,
            data: res.data
        }
    }
    return res.code;
}