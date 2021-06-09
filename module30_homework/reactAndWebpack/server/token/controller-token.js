const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const service = require('./service-verifyToken');
const tokenWorker = require('./tokenWorker');
const constants = require('./constants');
const e = require('express');

router.post('/generate', (req, res) => {
    const payload = {
        name: 'John',
        role: 'admin'
    };

    const generate = tokenWorker.generate(payload);
    res.send(generate)
})
router.post('/verify', (req, res) => {
    const token = req.header('accessToken');
    if(tokenWorker.verifyAccess(token) == 200){
        res.sendStatus(200);
    }else{
        res.sendStatus(400)
    }
})
router.post('/refresh', (req, res) => {
    var response = tokenWorker.refresh(req, res);
    res.send({response})
})

module.exports = {
    token: router
}