const connection = require("../database");

exports.getCompansations = (req, res, next) => {
    connection.query("select * from compansation", (error, rows, fields) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: rows});
    });
};

exports.createCompansation = (req, res, next) => {
    const query = "insert into compansation " +
        "(salary, deductions, bonus, employeeId) " +
        `values( ${req.body.salary}, ${req.body.deductions}, ${req.body.bonus}, `  +
        ` ${req.body.employeeId})`;
    connection.query(query, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.getCompansation = (req, res, next) => {
    connection.query(`select * from compansation where id = ${req.params.id}`, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.updateCompansation = (req, res, next) => {
    const queryString = "update compansation " +
        `set salary=${req.body.salary}, ` + 
        `deductions=${req.body.deductions}, ` + 
        `bonus=${req.body.bonus}, ` + 
        `where id = ${req.params.id}`;

    connection.query(queryString, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
};

exports.deleteCompansation = (req, res, next) => {
    connection.query(`delete from compansation where id = ${req.params.id}`, (error, results) => {
        if (error) res.json({status: "error", result: error});
        res.json({status: "ok", result: results});
    });
}