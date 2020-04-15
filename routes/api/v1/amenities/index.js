const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const {Amenity} = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const amenities = await Amenity.findAll();

    res.send({
        data: amenities
    })
}));
module.exports = router;