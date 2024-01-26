const connection = require("./../database");
const date = require("../helpers/dateHelper");
const dateFormarter = date.date();

exports.getEmployees = (req, res, next) => {
  connection.connect((error) => {
    if (error) {
      return res.json({ status: "error", result: error });
    }
    connection.query("select * from employees", (error, rows, fields) => {
      if (error) return res.json({ status: "error", result: error });
      return res.json({ status: "ok", result: rows });
    });
  });
};

exports.createEmployee = (req, res, next) => {
  const query =
    "insert into employees " +
    "(firstName, lastName, idNumber, gender, dateOfBirth, passwordSalt) " +
    `values( '${req.body.firstName}', '${req.body.lastName}', '${req.body.idNumber}', ` +
    `'${req.body.gender}', '${dateFormarter.dateToISO(req.body.dateOfBirth)}', '${req.body.passwordSalt}')`;
  connection.connect((error) => {
    if (error) {
      return res.json({ status: "error", result: error });
    }
    connection.query(query, (error, results) => {
      if (error) {
        return res.json({ status: "error", result: error });
      }
      return res.json({ status: "ok", result: results });
    });
  });
};

exports.getEmployee = (req, res, next) => {
  connection.connect((error) => {
    if (error) {
      return res.json({ status: "error", result: error });
    }
    connection.query(
      `select * from employees where id = ${req.params.id}`,
      (error, results) => {
        if (error) return res.json({ status: "error", result: error });
        return res.json({ status: "ok", result: results });
      },
    );
  });
};

exports.updateEmployee = (req, res, next) => {
  const queryString =
    "update employees " +
    `set firstName='${req.body.firstName}', ` +
    `lastName='${req.body.lastName}', ` +
    `idNumber='${req.body.idNumber}', ` +
    `gender='${req.body.gender}', ` +
    `dateOfBirth=${dateFormarter.dateToISO(req.body.dateOfBirth)} ` +
    `where id = ${req.params.id}`;

  connection.connect((error) => {
    if (error) {
      return res.json({ status: "error", result: error });
    }
    connection.query(queryString, (error, results) => {
      if (error) return res.json({ status: "error", result: error });
      return res.json({ status: "ok", result: results });
    });
  });
};

exports.deleteEmployee = (req, res, next) => {
  connection.connect((error) => {
    if (error) {
      return res.json({ status: "error", result: error });
    }
    connection.query(
      `delete from employees where id = ${req.params.id}`,
      (error, results) => {
        if (error) return res.json({ status: "error", result: error });
        return res.json({ status: "ok", result: results });
      },
    );
  });
};
