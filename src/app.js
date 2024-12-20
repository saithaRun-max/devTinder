const express = require("express");

const { adminAuth } = require("./middlewares/auth");

const { userHistory } = require("./middlewares/history");

const app = express();

app.use("/admin", adminAuth);

app.use("/admin/getuser", (req, res) => {
  res.send("user data generated");
});

app.use("/user/history",userHistory, (req, res)=>{
  res.send("Your history")
})

app.listen(3000, () => {
  console.log("server is running , 3000.. ");
});
