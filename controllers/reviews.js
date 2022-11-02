const Course = require('../models/course');

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res, next) {
  // Note the cool "dot" syntax to query for a movie with a
  // review nested within an array
  Course.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function(course) {
    if (!course) return res.redirect('/courses');
    course.reviews.remove(req.params.id);
    course.save().then(function() {
      res.redirect(`/courses/${course._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}

function create(req, res) {
  Course.findById(req.params.id, function(err, course) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    
    // We push an object with the data for the
    // review subdoc into Mongoose arrays
    course.reviews.push(req.body);
    course.save(function(err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/courses/${course._id}`);
    });
  });
}