const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Route } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const routes = await Route.findAll();

    res.send({
        data: routes
    })
}));
module.exports = router;