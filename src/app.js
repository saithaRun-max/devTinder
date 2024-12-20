const express = require("express");

const app = express();

// Handling multiple routes

//handling [] , handling order of execution, handling by next(), handling 2 responses



app.use("/user", [(req, res, next) => {
  console.log("Response 1 !");
  next();

  // res.send("Response 1 from server");

},
(req, res, next) => {
  console.log("Response 2 !");
  // res.send("Response 2 from server");
  next()
}],
(req, res, next) => {
  console.log("Response 3 !");
  next();

  // res.send("Response 3 from server");

},
(req, res, next) => {
  console.log("Response 4 !");
  res.send("Response 4 from server");
  // next()
});



app.listen(3000, () => {
  console.log("server is running , 3000.. ");
});
