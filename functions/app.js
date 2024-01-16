var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
import serverless from "serverless-http";

var indexRouter = require('../routes/index');
var employeesRouter = require('../routes/employeesRoutes');
const addressesRouter = require('../routes/addressesRoutes');
const compansationRouter = require('../routes/compansationRoutes');
const contactsRouter = require('../routes/contactsRoutes');
const documentsRouter = require('../routes/documentRoutes');
const employmentDetailsRouter = require('../routes/employmentDetailsRoutes');
const leaveRouter = require('../routes/leaveRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', 
    [
        indexRouter, 
        addressesRouter, 
        employeesRouter,
        compansationRouter,
        contactsRouter,
        documentsRouter,
        employmentDetailsRouter,
        leaveRouter
    ]
);

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

export const handler = serverless(app);
// module.exports = app;
