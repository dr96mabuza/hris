const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const employeesRouter = require("./routes/employees.routes");
const addressesRouter = require("./routes/addresses.routes");
const compansationRouter = require("./routes/compansation.routes");
const contactsRouter = require("./routes/contacts.routes");
const documentsRouter = require("./routes/document.routes");
const employmentDetailsRouter = require("./routes/employmentDetails.routes");
const leaveRouter = require("./routes/leave.routes");
const profileRouter = require("./routes/profile.routes");

const app = express();
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
app.use("/", verifyToken, profileRouter);

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
