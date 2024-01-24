var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
// const passport = require("passport");
// var JwtStrategy = require("passport-jwt").Strategy,
  // ExtractJwt = require("passport-jwt").ExtractJwt;
// var opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = "secret";
// opts.issuer = "https://hris-qp6t.onrender.com";
// opts.audience = "https://delightful-cajeta-c7d19a.netlify.app/";
// import serverless from "serverless-http";

var indexRouter = require("./routes/index");
var employeesRouter = require("./routes/employeesRoutes");
const addressesRouter = require("./routes/addressesRoutes");
const compansationRouter = require("./routes/compansationRoutes");
const contactsRouter = require("./routes/contactsRoutes");
const documentsRouter = require("./routes/documentRoutes");
const employmentDetailsRouter = require("./routes/employmentDetailsRoutes");
const leaveRouter = require("./routes/leaveRoutes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

// passport.use(
  // new JwtStrategy(opts, (jwt_payload, done) => {
    // connection.connect((error) => {
      // if (error) return done(err, false);
      // connection.query(
        // `select * from employees where id = ${jwt_payload.sub}`,
        // (error, results) => {
          // if (error) return done(err, false);
          // if (results.length > 0) {
            // return done(null, results);
          // }
          // return done(null, false);
        // },
      // );
    // });
  // }),
// );

app.use("/", [
  indexRouter,
  addressesRouter,
  employeesRouter,
  compansationRouter,
  contactsRouter,
  documentsRouter,
  employmentDetailsRouter,
  leaveRouter,
]);

app.use((err, req, res, next) => {
  if (err instanceof Error) {
    res.status(err.statusCode).json({ status: "error", message: err.message });
  } else {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("server up and running on port 5000!");
});

// export const handler = serverless(app);
module.exports = app;
