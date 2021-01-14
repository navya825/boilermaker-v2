const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const passport = require("passport");

//session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "a wildly insecure secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//logging middleware
app.use(morgan("dev"));

//static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

//parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mounting API routes on /api
app.use("/api", require("./api"));

//sending to HTML if API routes don't match
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});

//handling 500 errors - should go at the end of file
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
