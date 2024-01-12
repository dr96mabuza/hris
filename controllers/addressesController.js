const connection = require("./../database");

exports.getAddresses = (req, res, next) => {
    connection.query("select * from addresses", (error, rows, fields) => {
        if (error) next(error)
        res.json({status: "ok", result: rows});
    });
};

exports.createAddress = (req, res, next) => {
    const query = "insert into addresses " +
        "(street, suburb, city, province, postalCode, employeeId) " +
        `values( '${req.body.street}', '${req.body.suburb}', '${req.body.city}', `  +
        `'${req.body.province}', ${req.body.postalCode}, ${req.body.employeeId})`;
    connection.query(query, (error, results) => {
        if (error) next(err);
        res.json({status: "ok", result: results});
    });
};

exports.getAddress = (req, res, next) => {
    connection.query(`select * from addresses where id = ${req.params.id}`, (error, results) => {
        if (error) next(error);
        res.json({status: "ok", result: results});
    });
};

exports.updateAddress = (req, res, next) => {
    
    const queryString = "update addresses " +
        `set street="${req.body.street}", ` + 
        `suburb="${req.body.suburb}", ` + 
        `city="${req.body.city}", ` + 
        `province="${req.body.province}", ` + 
        `postalCode=${req.body.postalCode}, ` + 
        `employeeId=${req.body.employeeId} ` +
        `where id = ${req.params.id}`;
    
    connection.query(queryString, (error, results) => {
        if (error) next(error);
        res.json({status: "ok", result: results});
    });

};

exports.deleteAddress = (req, res, next) => {
    connection.query(`delete from addresses where id = ${req.params.id}`, (error, results) => {
        if (error) next(error);
        res.json({status: "ok", result: results});
    });
};