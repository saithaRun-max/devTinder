const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Tesing, testing testing");
});

app.use("/userData", (req, res) => {
  res.send("from user");
});

app.use("/", (req, res) => {
  res.send("from Dashboard");
});

app.listen(3000, () => {
  console.log("server is running , 3000.. ");
});
