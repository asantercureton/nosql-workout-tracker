// IMPORTING EXPRESS ROUTER & MODEL
const router = require('express').Router();
const workoutModel = require('../models/Workout');

// READ/GET ALL WORKOUTS
router.get('/api/workouts', async (req, res) => {
    const workout = await workoutModel.find();

    try {
        res.send(workout);
    } catch (err) {
        res.status(500).send(err);
    }
        // .then((dbWorkouts) => {
        //     res.json(dbWorkouts);
        // }).catch((err) => {
        //     res.json(err);
        // });
});

// CREATE/POST A WORKOUT
router.post('/api/workouts', async (req, res) => {
    const workout = new workoutModel.create(req.body)
        ;

    try {
        await workout.save();
        res.send(workout);
    } catch (err) {
        res.status(500).send(err);
    }

    // db.Workout.create(req.body)
    //     .then((dbWorkouts) => {
    //         res.json(dbWorkouts);
    //     }).catch((err) => {
    //         res.json(err);
    //     });
});

// UPDATE/PUT A WORKOUT
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        }).catch((err) => {
            res.json(err);
        });
})

// EXPORT ROUTES for API
module.exports = router;