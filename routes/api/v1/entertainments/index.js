const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Entertainment } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const entertainments = await Entertainment.findAll();

    res.send({
        data: entertainments
    })
}));
module.exports = router;