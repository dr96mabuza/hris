const connection = require("../database");

exports.getLeaves = (req, res) => {
    connection.query("select * from leaveManagement", (error, rows, fields) => {
        if (error) {
            res.json({status: "error", result: error});
        };
        res.json({status: "ok", result: rows});
    });
};

exports.createLeave = (req, res, next) => {
    const query = "insert into leaveManagement " +
        "(leaveBalance, daysAbsent, employeeId) " +
        `values( '${req.body.leaveBalance}', '${req.body.daysAbsent}',  ${req.body.employeeId})`;
    connection.query(query, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.getLeave = (req, res, next) => {
    connection.query(`select * from leaveManagement where id = ${req.params.id}`, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.updateLeave = (req, res, next) => {
    
    const queryString = "update leaveManagement " +
        `set leaveBalance=${req.body.leaveBalance}, ` + 
        `daysAbsent=${req.body.daysAbsent}, ` + 
        `employeeId=${req.body.employeeId} ` +
        `where id = ${req.params.id}`;
    
    connection.query(queryString, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.deleteLeave = (req, res, next) => {
    connection.query(`delete from leaveManagement where id = ${req.params.id}`, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
}