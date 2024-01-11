const connection = require("../database");

exports.getEmploymentDetails = (req, res) => {
    connection.query("select * from employmentDetails", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        res.json(rows);
    });
};

exports.createEmploymentDetail = (req, res) => {
    res.send("create new EmploymentDetail request!");
};

exports.getEmploymentDetail = (req, res) => {
    res.send(`get EmploymentDetail by id: ${id}`);
};

exports.updateEmploymentDetail = (req, res) => {
    res.send("edit EmploymentDetail details!");
};

exports.deleteEmploymentDetail = (req, res) => {
    res.send(`delete ${req.params.id}`);
}