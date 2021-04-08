const dao = require('./dao-signup');
var toDb = {}
module.exports.signupService = async function(data){
    if(data.status == 'append'){
        toDb = Object.assign({},toDb,data.data);
        if (toDb){
            // return toDb
            return 'Code:200'
        }else{
            return 'Code:400'
        }
        // return toDb
    }else if(data.status == 'upload'){
        toDb = Object.assign({},toDb,data);
        // return toDb;
        const res = await dao.signupDao(toDb)
        return(res)   
    }
}