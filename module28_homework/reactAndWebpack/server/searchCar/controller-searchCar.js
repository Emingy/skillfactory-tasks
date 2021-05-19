const express = require('express');
const router = express.Router();
const service = require('./service-searchCar');


router.get('/', async (req, res) => {
    const data = await service.searchCarService(req.query)
    res.send(data)
})
module.exports = {
    searchCar: router
}