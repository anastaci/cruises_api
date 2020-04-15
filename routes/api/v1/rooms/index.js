const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Room } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const rooms = await Room.findAll();

    res.send({
        data: rooms
    })
}));
module.exports = router;