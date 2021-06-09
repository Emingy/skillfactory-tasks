const express = require('express');
const router = express.Router();
const service = require('./service-car');


router.get('/', async (req, res) => {
    const data = await service.carService()
    res.send(data)
})
module.exports = {
    car: router
}