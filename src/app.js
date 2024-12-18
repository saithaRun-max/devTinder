const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Sai", lastName: "Tharun" });
});

app.post("/user", (req, res) => {
  res.send("Data reseved sucessfully");
});

app.patch("/user", (req, res) => {
  res.send("Data updated sucessfully");
});

app.delete("/user", (req, res) => {
  res.send("Deleted sucessfully");
});

// app.use("/", (req, res) => {
//   res.send("from Dashboard");
// });

app.listen(3000, () => {
  console.log("server is running , 3000.. ");
});
