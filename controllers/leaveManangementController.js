const connection = require("../database");

exports.getLeaves = (req, res) => {
  connection.query("select * from leaves", (error, rows, fields) => {
    if (error) {
      res.json({ status: "error", result: error });
    }
    res.json({ status: "ok", result: rows });
  });
};

exports.createLeave = (req, res, next) => {
  const query =
    "insert into leaves " +
    "INSERT INTO leaves (leave_type, reason, start_date, end_date, days_absent, employee_id, approval) " +
    `values( '${req.body.leave_type}', '${req.body.reason}', '${req.body.start_date}', '${req.body.end_date}', ${req.body.employeeId}, '${req.body.approval}')`;
  connection.query(query, (error, results) => {
    if (error) res.json({ status: "error", result: error });
    res.json({ status: "ok", result: results });
  });
};

exports.getLeave = (req, res, next) => {
  connection.query(
    `select * from leaves where leave_id = ${req.params.id}`,
    (error, results) => {
      if (error) res.json({ status: "error", result: error });
      res.json({ status: "ok", result: results });
    },
  );
};

exports.updateLeave = (req, res, next) => {
  const queryString =
    "update leaves " +
    `set (leave_type, reason, start_date, end_date, days_absent, approval)` +
    `values( '${req.body.leave_type}', '${req.body.reason}', '${req.body.start_date}', '${req.body.end_date}', '${req.body.approval}'`;
  `where id = ${req.params.id}`;

  connection.query(queryString, (error, results) => {
    if (error) res.json({ status: "error", result: error });
    res.json({ status: "ok", result: results });
  });
};

exports.deleteLeave = (req, res, next) => {
  connection.query(
    `delete from leaves where id = ${req.params.id}`,
    (error, results) => {
      if (error) res.json({ status: "error", result: error });
      res.json({ status: "ok", result: results });
    },
  );
};
