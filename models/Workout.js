const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutPlan = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            type: {
                type: String,
                required: "Type is Required"
            },
            name: {
                type: String,
                required: "Name is Required"
            },
            duration: {
                type: Number,
                required: "Duration of exercise is Required"
            },
            weight: {
                type: Number,
                required: "Weight of exercise is Required"
            },
            reps: {
                type: Number,
                required: "Reps of exercise is Required"
            },
            sets: {
                type: Number,
                required: "Sets of exercise is Required"
            },
            distance: {
                type: Number,
                required: "Distance of exercise is Required"
            },
        },

    ]

});

const Workout = mongoose.model("Workout", WorkoutPlan);

module.exports = Workout;