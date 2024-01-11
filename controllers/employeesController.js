const connection = require("./../database");

exports.getEmployees = (req, res) => {
    connection.query("select * from employees", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        res.json(rows);
    });
};

exports.createEmployee = (req, res) => {
    res.send("create new employee request!");
};

exports.getEmployee = (req, res) => {
    res.send(`get employee by id: ${id}`);
};

exports.updateEmployee = (req, res) => {
    res.send("edit employee details!");
};

exports.deleteEmployee = (req, res) => {
    res.send(`delete ${req.params.id}`);
}