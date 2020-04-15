const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Deck } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const desks = await Deck.findAll();

    res.send({
        data: desks
    })
}));
module.exports = router;