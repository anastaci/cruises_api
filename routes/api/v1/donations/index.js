const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Donation } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const donations = await Donation.findAll();

    res.send({
        data: donations
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const donation = await Donation.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: donation
    })
}));

module.exports = router;
