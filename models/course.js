const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
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
        type: String
    },
    location: {
        type: String
    },
    price: {
      type: Number
    },
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Course', courseSchema);