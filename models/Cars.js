const mongoose = require('mongoose');
// Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new user Schema object
const CarSchema = new Schema({
  _id: {
    type: String,
  },
  price: {
    type: Number,
  },
  make: {
    type: String,
  },
  year: {
    type: Number,
  },
  options: {
    hasSunroof: {
      type: Boolean,
    },
    isFourWheelDrive: {
      type: Boolean,
    },
    hasLowMiles: {
      type: Boolean,
    },
    hasPowerWindows: {
      type: Boolean,
    },
    hasNavigation: {
      type: Boolean,
    },
    hasHeatedSeats: {
      type: Boolean,
    },
  }
});

// This creates our model from the above schema, using mongoose's model method
module.exports = Cars = mongoose.model('Cars', CarSchema);
