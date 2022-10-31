const Course = require('../models/course');

module.exports = {
    new: newCourse,
    create,
    index
}


function newCourse (req, res) {
    res.render('courses/new');
}

function create(req, res) {

    const course = new Course(req.body);

    course.save(function(err) {
        if(err) return res.redirect('/courses/new');
        console.log(course);
        res.redirect('/courses/new');
    });
}

function index(req, res) {
    
}