const connection = require("../database");

exports.getLeaves = (req, res) => {
    connection.query("select * from leaveManagement", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        res.json(rows);
    });
};

exports.createLeave = (req, res, next) => {
    const query = "insert into leaveManagement " +
        "(leaveBalance, daysAbsent, employeeId) " +
        `values( '${req.body.leaveBalance}', '${req.body.daysAbsent}',  ${req.body.employeeId})`;
    connection.query(query, (error, results) => {
        if (error) next(err);
        res.json(results);
    });
};

exports.getLeave = (req, res, next) => {
    connection.query(`select * from leaveManagement where id = ${req.params.id}`, (error, results) => {
        if (error) next(error);
        res.json(results);
    });
};

exports.updateLeave = (req, res, next) => {
    
    const queryString = "update leaveManagement " +
        `set leaveBalance=${req.body.leaveBalance}, ` + 
        `daysAbsent=${req.body.daysAbsent}, ` + 
        `employeeId=${req.body.employeeId} ` +
        `where id = ${req.params.id}`;
    
    connection.query(queryString, (error, results) => {
        if (error) next(error);
        res.json(results);
    });
};

exports.deleteLeave = (req, res, next) => {
    connection.query(`delete from leaveManagement where id = ${req.params.id}`, (error, results) => {
        if (error) next(error);
        res.json(results);
    });
}