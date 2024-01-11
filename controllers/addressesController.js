const connection = require("./../database");

exports.getAddresses = (req, res) => {
    connection.query("select * from addresses", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        res.json(rows);
    });
};

exports.createAddress = (req, res) => {
    res.send("create new Address request!");
};

exports.getAddress = (req, res) => {
    res.send(`get Address by id: ${id}`);
};

exports.updateAddress = (req, res) => {
    res.send("edit Address details!");
};

exports.deleteAddress = (req, res) => {
    res.send(`delete ${req.params.id}`);
}