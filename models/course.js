const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    checkInEase: {
      type: Number,
      min: 1,
      max: 5,
      default:5
    },
    fairwayCondition: {
      type: Number,
      min: 1,
      max: 5,
      default:5
    },
    foodUtil: {
      type: Number,
      min: 1,
      max: 5,
      default:5
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
});

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String,
    reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);