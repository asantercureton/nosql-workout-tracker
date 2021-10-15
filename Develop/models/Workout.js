// BRING IN MONGOOSE SCHEMA
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// NEW WORKOUT SCHEMA
const WorkoutSchema = new Schema({
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
                default: 10,
            },
            weight: {
                type: Number,
                default: 0,
            },
            reps: {
                type: Number,
                default: 0,
            },
            sets: {
                type: Number,
                default: 0,
            },
            distance: {
                type: Number,
                default: 0,
            },
        },

    ]

});

// MONGOOSE MODEL 'Workout' CREATION with 'WorkoutPlan' Schema
const Workout = mongoose.model("Workout", WorkoutSchema);

// EXPORT WORKOUT
module.exports = Workout;