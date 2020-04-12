const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Animals } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const animals = await Animals.findAll();

    res.send({
        data: animals
    })
}));

//post
router.get('/create', asyncHandler(async (req, res) => {
    const animal = await Animals.create({
        userId: 1,
        name: faker.name.firstName(),
        birth: faker.date.past(10, '2000-01-01'),
        type: 'dog',
        breed: `Немецкая овчарка`,
        color: 'подпалый',
        sex: 'male',
    });

    res.send({
        data: animal
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    let animal = await Animals.findOne({
        where: {
            id: req.params.id
        }
    });

    if(!animal){
        res.status(403).send('id does not exist')
    }else{
        animal = await animal.update({
            ...req.body
        });

        res.send({
            data: animal
        });
    }
}));



router.delete('/:id', asyncHandler(async (req, res) => {
    const deletedAnimal = await Animals.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: deletedAnimal
    });
}));



router.get('/:id', asyncHandler(async (req, res) => {
    const animal = await Animals.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

module.exports = router;
