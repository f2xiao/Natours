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

// request time
app.use((req, res, next) => {
  const time = new Date();
  req.requestTime = time.toISOString();
  console.log(req.requestTime);
  next();
});
// 2) Router
app.use("/api/v1/tours", tourRouter);
module.exports = app;
