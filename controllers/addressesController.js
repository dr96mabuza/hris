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
    const query = "insert into addresses" +
        "(street, suburb, city, province, postalCode, employeeId)" +
        `values(
            ${req.body.street}, 
            ${req.body.suburb}, 
            ${req.body.city}, 
            ${req.body.province}, 
            ${req.body.postalCode}, 
            ${req.body.employeeId}
        )`;
    connection.query(query, (error, results) => {
        if (error) {
            res.send(error);
        };
        res.json(results);
    });
};

exports.getAddress = (req, res) => {
    connection.query(`select * from addresses where id = ${req.params.id}`, (error, results) => {
        if (error) {
            res.send(error);
        };
        res.json(results);
    });
};

exports.updateAddress = (req, res) => {
    connection.query(`select * from addresses where id = ${req.params.id}`, (error, results) => {
        if (error) {
            res.send(error);
        };
        
        for (const key in results) {
            if (results[key] !== req.body[key]) {
                const queryString = "update addresses "
                    `set ${key}=${req.body[key]} ` +
                    `where id = ${req.params.id}`;
                connection.query(queryString, (error, rows, fields) => {
                    if (error) {
                        res.send(error);
                    };
                    res.json(rows);
                });
            };
        };

    });

};

exports.deleteAddress = (req, res) => {
    connection.query(`delete from addresses where id = ${req.params.id}`, (error, results) => {
        if (error) {
            res.send(error);
        };
        res.json(results);
    });
};