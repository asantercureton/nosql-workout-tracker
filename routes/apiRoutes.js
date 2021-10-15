// IMPORTING EXPRESS ROUTER & MODEL
const router = require('express').Router();
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// READ/GET ALL WORKOUTS
router.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration:
                    { $sum: '$exercises.duration' }
            },
        }
    ])
        .then((dbWorkout) => {
            res.status(200).json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// READ/GET ALL WORKOUTS IN RANGE
router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration:
                    { $sum: '$exercises.duration' }
            },
        }
    ])
        .then((dbWorkout) => {
            res.status(200).json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// CREATE/POST A WORKOUT
router.post('/api/workouts', async (req, res) => {
    db.Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
});

// UPDATE/PUT A WORKOUT
router.put('/api/workouts/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    db.Workout.findByIdAndUpdate(id, { $push: {exercises: body} }, { new: true })
        .then((workout) => {
            console.log(workout);
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// EXPORT ROUTES for API
module.exports = router;