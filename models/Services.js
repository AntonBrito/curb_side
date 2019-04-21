const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ServicesSchema = new Schema({
  description: {
    type: [String],
    required: true
  },
  moving: [
    {
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      details: {
        type: String,
        required: true
      },
      date: {
        type: Date
      }
    }
  ],
  donation: [
    {
      from: {
        type: String,
        required: true
      },
      to: {
        type: String
      },
      details: {
        type: String
      },
      date: {
        type: Date
      }
    }
  ],
  details: [
    {
      name: {
        type: [String],
        required: true
      },
      location: {
        type: String,
        required: true
      },
      note: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  current: {
    type: Boolean,
    default: false
  }
});

module.exports = Services = mongoose.model("services", ServicesSchema);
