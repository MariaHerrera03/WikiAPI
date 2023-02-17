const Workout = require('./Model');

const getAllWorkouts = (req, res) => {
    Workout.find((err, result) => {
        if(err) throw new Error(err);
        // res.json(result);
        console.log(result)
    })
    return Workout.workouts;
}

module.exports = { getAllWorkouts };