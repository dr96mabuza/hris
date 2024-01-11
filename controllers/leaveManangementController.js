const connection = require("../database");

exports.getLeaves = (req, res) => {
    connection.query("select * from leaveManagement", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        res.json(rows);
    });
};

exports.createLeave = (req, res) => {
    res.send("create new Leave request!");
};

exports.getLeave = (req, res) => {
    res.send(`get Leave by id: ${id}`);
};

exports.updateLeave = (req, res) => {
    res.send("edit Leave details!");
};

exports.deleteLeave = (req, res) => {
    res.send(`delete ${req.params.id}`);
}