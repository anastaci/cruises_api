const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Cruise } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const cruises = await Cruise.findAll();

    res.send({
        data: cruises
    })
}));
module.exports = router;