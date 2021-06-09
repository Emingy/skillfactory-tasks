const express = require('express');
const router = express.Router();
const service = require('./service-signin');


router.post('/', async (req, res) => {
    const userData = req.body;
    const data = await service.signinService(userData)
    res.send(data)
})

module.exports = {
    signIn: router
}