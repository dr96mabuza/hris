var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var employeesRouter = require("./routes/employeesRoutes");
const addressesRouter = require("./routes/addressesRoutes");
const compansationRouter = require("./routes/compansationRoutes");
const contactsRouter = require("./routes/contactsRoutes");
const documentsRouter = require("./routes/documentRoutes");
const employmentDetailsRouter = require("./routes/employmentDetailsRoutes");
const leaveRouter = require("./routes/leaveRoutes");

var app = express();
const jwt = require("jsonwebtoken");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

const verifyToken = (req, res, next) => {
  if (req.path === "/login" || req.path === "/signup") next();
  const token = req.headers["authorization"].split(" ").pop();
  jwt.verify(token, "secret25", (err, result) => {
    if (err) return res.json({ status: "error", result: err });
    next();
  });
};

app.use("/", indexRouter);
app.use("/", verifyToken, addressesRouter);
app.use("/", verifyToken, employeesRouter);
app.use("/", verifyToken, compansationRouter);
app.use("/", verifyToken, contactsRouter);
app.use("/", verifyToken, documentsRouter);
app.use("/", verifyToken, employmentDetailsRouter);
app.use("/", verifyToken, leaveRouter);

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
