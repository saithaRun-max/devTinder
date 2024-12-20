const express = require("express");

const app = express();

//good way
app.use("/getUserData", (req, res) => {
  try {
    //if error to getting data from db
    throw new Error("eeeee");
  } catch (err) {
    res.status(500).send("Some error");
  }
});

//wild card error handling

//keep it last, it matchs every rotue

app.use("/", (err, req, res, next) => {
  // (2 - parameters - 1st is req, 2nd is res )
  // (3 - parameters - 1-req, 2-res, 3-next )
  // (4 - param - 1-error, 2-req, 3-res, 4-next)
  if (err) {
    res.status(500).send("Something went worng");
  }
});

app.listen(3000, () => {
  console.log("server is running , 3000.. ");
});
