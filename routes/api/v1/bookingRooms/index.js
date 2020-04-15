const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const {BookingRoom} = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const bookingrooms = await BookingRoom.findAll();

    res.send({
        data: bookingrooms
    })
}));
module.exports = router;