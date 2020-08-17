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

router.route('/:id').get((req, res) => {
  Ride.findById(req.params.id)
    .then(ride => res.json(ride))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Ride.findByIdAndDelete(req.params.id)
    .then(() => res.json('Ride deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Ride.findByIdAndDelete(req.params.id)
    .then(ride => {
      ride.username = req.body.username;
      ride.description = req.body.description;
      ride.duration = Number(req.body.duration);
      ride.distance = Number(req.body.distance);
      ride.date = Date.parse(req.body.date);

      ride.save()
        .then(() => res.json('Ride updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;