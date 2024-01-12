const connection = require("./../database");

exports.getEmployees = (req, res, next) => {
    connection.query("select * from employees", (error, rows, fields) => {
        if (error) next(error);
        res.json(rows);
    });
};

exports.createEmployee = (req, res, next) => {
    const query = "insert into employees " +
        "(firstName, suburb, idNumber, gender, dateOfBirth, passwordSalt) " +
        `values( '${req.body.firstName}', '${req.body.suburb}', '${req.body.idNumber}', `  +
        `'${req.body.gender}', ${req.body.dateOfBirth}, ${req.body.passwordSalt})`;
    connection.query(query, (error, results) => {
        if (error) next(err);
        res.json(results);
    });
};

exports.getEmployee = (req, res, next) => {
    connection.query(`select * from employees where id = ${req.params.id}`, (error, results) => {
        if (error) next(error);
        res.json(results);
    });
};

exports.updateEmployee = (req, res, next) => {
    
    const queryString = "update employees " +
        `set firstName="${req.body.firstName}", ` + 
        `lastName="${req.body.lastName}", ` + 
        `idNumber="${req.body.idNumber}", ` + 
        `gender="${req.body.gender}", ` + 
        `dateOfBirth=${req.body.dateOfBirth}, ` + 
        `passwordSalt=${req.body.passwordSalt} ` +
        `where id = ${req.params.id}`;
    
    connection.query(queryString, (error, results) => {
        if (error) next(error);
        res.json(results);
    });
};

exports.deleteEmployee = (req, res, next) => {
    connection.query(`delete from employees where id = ${req.params.id}`, (error, results) => {
        if (error) next(error);
        res.json(results);
    });
}