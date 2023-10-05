const Review = require('../model/reviewModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handleFactory');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes

  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.createReview = factory.createOne(Review);
exports.getReview = factory.getOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
