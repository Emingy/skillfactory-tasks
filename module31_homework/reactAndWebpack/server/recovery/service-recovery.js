const dao = require('./dao-recovery');
const tokenWorker = require('../token/tokenWorker');
module.exports.recoveryService = async function(data){
        const res = await dao.recoveryDao(data);
        return res;
}