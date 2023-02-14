var express = require("express");
var port = 3000;
var bodyParser = require("body-parser");
var spells = require("./routes/spellRoute");
var index = require("./routes/index");

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use("/", index);
app.use("/spells", spells);

// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
