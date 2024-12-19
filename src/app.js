const express = require("express");

const app = express();

//IMP

//regex
// /a/ if 'a' in route or 'rat' it is responded
// /.*fly$/  - if fly available route it will responded fly & butterfly

//adding query param and reading

// /user?userId=101
// console.log(req.query)

// 2 or more params
// /user?userId=101&password=testing
// receving same

// Handling -  /user/101




// Handling query params

// for /user?userId=101

app.get("/user", (req, res) => {
  console.log(req.query)
  res.send({ firstName: "Sai", lastName: "Tharun" });
});

// for /user?userId=101&password=testing

app.get("/user", (req, res) => {
  console.log(req.query)
  res.send({ firstName: "Sai", lastName: "Tharun" });
});

// for /user/101


// Sending - "/user/101" - Reading /user/:userId - console.log(req.params)


app.get("/user/:userId", (req, res) => {
  console.log(req.params)
  res.send({ firstName: "Sai", lastName: "Tharun" });
});


// for /user/101/saitharun/pass

// Sending - /user/101/saitharun/pass - Reading - "/user/:userId/:name/:password"  - console.log(req.params)


app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params)
  res.send({ firstName: "Sai", lastName: "Tharun" });
});






app.listen(3000, () => {
  console.log("server is running , 3000.. ");
});
