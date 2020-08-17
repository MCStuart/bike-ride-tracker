const router = require('express').Router();
let Exercise = require('../models/ride.model');
const Ride = require('../models/ride.model');

router.route('/').get((req, res) => {
  Ride.find()
  .then(rides => res.json(rides))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username,
        description = req.body.description,
        duration = req.body.duration,
        distance = req.body.distance,
        date = req.body.date;

  const newExercise = new Exercise({
    username,
    description,
    duration,
    distance,
    date
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;