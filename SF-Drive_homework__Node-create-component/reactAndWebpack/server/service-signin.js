const dao = require('./dao-signin');
const tokenWorker = require('./tokenWorker');
module.exports.signinService = async function(data){
        const res = await dao.signupDao(data);
        if(res.code==200){
            const payload = {
                file: res.file,
                name: res.name,
                birthDate: res.birthDate,
                email: data.email,
                planing: res.planing,
                mobile: res.mobile
            }
            const genToken = await tokenWorker.generate(payload);
            return {
                code: 200,
                accessToken: genToken.accessToken,
                refreshToken: genToken.refreshToken
            }
        }
        return res.code;
}