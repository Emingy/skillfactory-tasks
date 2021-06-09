const dao = require('./dao-car');
module.exports.carService = async function(data){
    const res = await dao.carDao(data);
    if(res.code==200){
        return {
            code: 200,
            data: res.data
        }
    }
    return res.code;
}