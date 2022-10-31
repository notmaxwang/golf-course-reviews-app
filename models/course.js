const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({

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
    review: {
        type: String,
        //required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);