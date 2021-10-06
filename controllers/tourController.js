const fs = require("fs");

const tour = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkId = (req, res, next, val) => {
  const found = tour.find((element) => element.id === Number(val));
  if (found) {
    next();
  } else {
    res.send(`Sorry tour ${val} cannot be found`);
  }
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    res.send("Missing the price or name");
  }
  next();
};
exports.createTour = (req, res) => {
  const created = req.body;
  tour.push(created);
  tour[tour.length - 1].id = tour.length - 1;
  fs.writeFileSync(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tour)
  );
  res.send(tour[tour.length - 1]);
};

exports.getAllTours = (req, res) => {
  res.send(tour);
};

exports.getTour = (req, res) => {
  const found = tour.find((element) => element.id === Number(req.params.id));
  res.send(found);
};

exports.updateTour = (req, res) => {
  const updated = tour.map((element) =>
    element.id === Number(req.params.id)
      ? Object.assign(element, req.body)
      : element
  );
  res.send(updated);
};

exports.deleteTour = (req, res) => {
  const filtered = tour.filter((value) => value.id !== Number(req.params.id));
  res.send(filtered);
};
