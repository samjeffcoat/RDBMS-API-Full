const router = require('express').Router();

const knex= require('knex')

const knexConfig = require('../knexfile.js');

const db= knex(knexConfig.development)

// add a cohort to the database
router.post('/', (req, res) => {
    db('cohorts')
    .insert(req.body)
    .then(([id]) => {
        db('cohorts')
        .where({id})
        .first()
        .then(orange => {
            res.status(200).json(orange);
        })
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/', (req, res) => {
    // get the cohorts from the database
    db('cohorts')
        .then(cohorts=> {
            res.status(200).json(cohorts)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});




module.exports= router;