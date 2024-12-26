const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();
app.use(express.json());

//update data of user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("Updated Sucessfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//delete user by id
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(401).send("user not found");
    } else {
      res.send("deleted sucessfully");
    }
  } catch (err) {
    res.status(400).send("Something went wrong" + err);
  }
});

//get one-user by matching email id
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({ emailId: userEmail });
    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//get all users

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});

    if (!users) {
      res.send("users not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(401).send("Something went wrong");
  }
});

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("Data updated sucessfully");
  } catch (err) {
    res.send(400).send("Error saving the user :" + err.message);
  }
});

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
