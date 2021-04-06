const express = require('express');
const router = express.Router();
const service = require('./service-signup');


router.post('/', async (req, res) => {
    const userData = req.body;
    const data = await service.signupService(userData)
    res.send(data)
})

module.exports = {
    signUp: router
}