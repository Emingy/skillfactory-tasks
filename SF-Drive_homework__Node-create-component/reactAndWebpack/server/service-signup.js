const dao = require('./dao-signup');

module.exports.signupService = async function(data){
    const res = await dao.signupDao(data)
    return(res)
}