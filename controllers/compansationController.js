const connection = require("../database");

exports.getCompansations = (req, res) => {
    connection.query("select * from compansation", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        res.json(rows);
    });
};

exports.createCompansation = (req, res) => {
    res.send("create new Compansation request!");
};

exports.getCompansation = (req, res) => {
    res.send(`get Compansation by id: ${id}`);
};

exports.updateCompansation = (req, res) => {
    res.send("edit Compansation details!");
};

exports.deleteCompansation = (req, res) => {
    res.send(`delete ${req.params.id}`);
}