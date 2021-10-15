// IMPORTING EXPRESS ROUTER & MODEL
const router = require('express').Router();
const db = require('../models');

// READ/GET ALL WORKOUTS
router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then((dbWorkout) => {
            res.status(200).json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// CREATE/POST A WORKOUT
router.post('/api/workouts', async (req, res) => {
    db.Workout.create(req.body)
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

// UPDATE/PUT A WORKOUT
router.put('/api/workouts/:id', async (req, res) => {
    const id = req.params.id;
    
    db.Workout.updateOne(
        { _id: id },
        {
            $push: { 
                exercises: { ...req.body },
            },
        }
    )
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// EXPORT ROUTES for API
module.exports = router;