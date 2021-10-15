// BRING IN MONGOOSE SCHEMA
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// NEW WORKOUT SCHEMA
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: true
                },
                name: {
                    type: String,
                    trim: true,
                    required: true
                },
                duration: {
                    type: Number,
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    });

// MONGOOSE MODEL 'Workout' CREATION with 'WorkoutPlan' Schema
const Workout = mongoose.model("Workout", workoutSchema);

// EXPORT WORKOUT
module.exports = Workout;