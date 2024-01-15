const connection = require("../database");

exports.getContacts = (req, res, next) => {
    connection.query("select * from contacts", (error, rows, fields) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: rows});
    });
};

exports.createContact = (req, res, next) => {
    const query = "insert into contacts " +
        "(email, cellphone, companyEmail, alternateNumber, employeeId) " +
        `values( '${req.body.email}', '${req.body.cellphone}', '${req.body.companyEmail}', `  +
        `'${req.body.alternateNumber}', ${req.body.employeeId})`;
    connection.query(query, (error, results) => {
        if (error) res.json({status: "error", result: err});
        res.json({status: "ok", result: results});
    });
};

exports.getContact = (req, res, next) => {
    connection.query(`select * from contacts where id = ${req.params.id}`, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.updateContact = (req, res, next) => {
    const queryString = "update contacts " +
        `set email='${req.body.email}', ` + 
        `cellphone='${req.body.cellphone}', ` + 
        `companyEmail='${req.body.companyEmail}', ` + 
        `alternateNumber='${req.body.alternateNumber}', ` +
        `employeeId=${req.body.employeeId} ` +
        `where id = ${req.params.id}`;
    
    connection.query(queryString, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.deleteContact = (req, res, next) => {
    connection.query(`delete from contacts where id = ${req.params.id}`, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};