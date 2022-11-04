const Course = require('../models/course');

module.exports = {
    new: newCourse,
    create,
    index,
    show,
    edit,
    update,
    delete: deleteCourse
}

function edit(req, res) {
    Course.findById(req.params.id, function(err, course) {
        res.render(`courses/edit`, {
            title: 'Edit Course',
            course
        });
    });
}

function update(req, res) {
    Course.findById(req.params.id, function(err, course) {
        course.name = req.body.name;
        course.location = req.body.location;
        course.price = req.body.price;
        course.save(function(err) {
            console.log(err)
            if (err) return res.redirect('/courses/new');
            res.redirect(`/courses/${course._id}`);
        });
    });
}

function deleteCourse(req, res) {
    Course.findOneAndDelete({
        _id: req.params.id
     }, function(err) {    
        res.redirect('/courses');
    });
}

function show(req, res) {
    Course.findById(req.params.id, function(err, course) {
        res.render('courses/show', {
        title: 'Course Detail',
        apiKey: process.env.GOOGLE_MAP_API_KEY,
        course
        });  
    });
}

function newCourse (req, res) {
    res.render('courses/new', { title: 'Add Course' });
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const course = new Course(req.body);

    course.save(function(err) {
        if(err) return res.redirect('/courses/new');
        res.redirect(`/courses/${course._id}`);
    });
}

function index(req, res) {
    Course.find({}, function(err, courses) {
        res.render('courses/index', {title: 'All Courses', courses });
    });
}