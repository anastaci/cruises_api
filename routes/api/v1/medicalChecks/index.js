const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { MedicalCheck } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const donations = await MedicalCheck.findAll();

    res.send({
        data: donations
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const donation = await MedicalCheck.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: donation
    })
}));

module.exports = router;
