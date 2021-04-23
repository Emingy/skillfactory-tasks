const dao = require('./dao-signup');
const tokenWorker = require('./tokenWorker');
var toDb = {}
module.exports.signupService = async function(data){
    if(data.status == 'append'){
        toDb = Object.assign({},toDb,data.data);
        if (toDb){
            return 'Code:200'
        }else{
            return 'Code:400'
        }
    }else if(data.status == 'upload'){
        toDb = Object.assign({},toDb,data.data);
        const res = await dao.signupDao(toDb)
        if(res==200){
            const payload = {
                file: toDb.file,
                name: toDb.name,
                birthDate: toDb.birthDate,
                email: toDb.email,
                planing: toDb.planing,
                mobile: toDb.mobile
            }
            const genToken = await tokenWorker.generate(payload);
            return {
                code: 200,
                accessToken: genToken.accessToken,
                refreshToken: genToken.refreshToken
            }
        }else{
            return {
                code: res
            }
        }
    }
}