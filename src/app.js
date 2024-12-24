const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user")

const app = express();


app.post("/signup", (req,res)=>{
  const user = new User({
    firstName : "Ram",
    lastName : "yadhama",
    emailId : "ram@gmail.com",
    age : 26
  });

  user.save();

  res.send("Data updated sucessfully")

})


connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("server is running , 3000.. ");
    });

  })
  .catch((err) => {
    console.error("Database cannot be established");
  });



