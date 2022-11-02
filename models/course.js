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
    course: {
        type: String,
        //required: true
    },
    location: {
        type: String,
        //required: true
    },
    review: [reviewSchema]
});

module.exports = mongoose.model('Course', courseSchema);