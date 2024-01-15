const connection = require("../database");

exports.getEmploymentDetails = (req, res) => {
    connection.query("select * from employmentDetails", (error, rows, fields) => {
        if (error) {
            res.json({status: "error", result: error});
        };
        res.json({status: "ok", result: rows});
    });
};

exports.createEmploymentDetail = (req, res, next) => {
    const query = "insert into employmentDetails " +
        "(company, jobRole, reportsTo, employmentStatus, startDate, employeeId) " +
        `values( '${req.body.company}', '${req.body.jobRole}', '${req.body.reportsTo}', `  +
        `'${req.body.employmentStatus}', ${req.body.startDate}, ${req.body.employeeId})`;
    connection.query(query, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.getEmploymentDetail = (req, res, next) => {
    connection.query(`select * from employmentDetails where id = ${req.params.id}`, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.updateEmploymentDetail = (req, res, next) => {
    const queryString = "update employmentDetails " +
        `set company="${req.body.company}", ` + 
        `jobRole="${req.body.jobRole}", ` + 
        `reportsTo=${req.body.reportsTo}, ` + 
        `employmentStatus="${req.body.employmentStatus}", ` + 
        `startDate=${req.body.startDate}, ` + 
        `employeeId=${req.body.employeeId} ` +
        `where id = ${req.params.id}`;
    
    connection.query(queryString, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.deleteEmploymentDetail = (req, res, next) => {
    connection.query(`delete from employmentDetails where id = ${req.params.id}`, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
}