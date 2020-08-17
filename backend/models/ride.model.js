const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rideSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  distance: { type: Number, required: true },
  date: { type: Date, required: true }
}, {
  timestamps: true
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;