const Course = require('../models/course');

module.exports = {
    new: newCourse,
    create,
    index,
    show
}

function show(req, res) {
    
}

function newCourse (req, res) {
    res.render('courses/new', { title: 'Add Course' });
}

function create(req, res) {

    const course = new Course(req.body);

    course.save(function(err) {
        if(err) return res.redirect('/courses/new');
        console.log(course);
        res.redirect('/courses');
    });
}

function index(req, res) {
    Course.find({}, function(err, courses) {
        res.render('courses/index', {title: 'All Courses', courses });
    });
}