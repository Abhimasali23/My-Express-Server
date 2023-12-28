
const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(req, res) {
  res.send("Contact Me at: abhimasali23@gmail.com");
})

app.get("/about", function(req, res) {
  res.send("Abhishek Masali");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Coffee</li><li>Code</li></ul>")
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
