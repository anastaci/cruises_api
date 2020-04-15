const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Passenger } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const passengers = await Passenger.findAll();

    res.send({
        data: passengers
    })
}));
module.exports = router;