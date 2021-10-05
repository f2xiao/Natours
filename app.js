const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");

const app = express();
// 1) MIDDLEWARES
// http request logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// parsing body
app.use(express.json());
// serve static files
app.use(express.static(`${__dirname}/public`));

// router
app.use("/api/v1/tours", tourRouter);
module.exports = app;
