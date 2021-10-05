const fs = require("fs");

const tour = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkId = (req, res, next, val) => {
  console.log(val);
  let id = tour.find((ele) => ele.id === val);
  next();
};

exports.createTour = (req, res) => {
  res.send("createTour");
};

exports.getAllTours = (req, res) => {
  res.send(tour);
};

exports.getTour = (req, res) => {
  res.send("getTour");
};

exports.updateTour = (req, res) => {
  res.send("updateTour");
};

exports.deleteTour = (req, res) => {
  res.send("deleteTour");
};
