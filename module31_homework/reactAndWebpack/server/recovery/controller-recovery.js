const express = require('express');
const router = express.Router();
const service = require('./service-recovery');


router.post('/', async (req, res) => {
    const userData = req.body;
    const data = await service.recoveryService(userData)
    res.send(data)
})

module.exports = {
    recovery: router
}