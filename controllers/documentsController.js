const connection = require("../database");

exports.getDocuments = (req, res) => {
    connection.query("select * from documents", (error, rows, fields) => {
        if (error) {
            res.send(error);
        };
        res.json(rows);
    });
};

exports.createDocument = (req, res, next) => {
    const query = "insert into documents " +
        "(documentName, document, employeeId) " +
        `values( '${req.body.documentName}', ${req.body.document},  ${req.body.employeeId})`;
    connection.query(query, (error, results) => {
        if (error) next(err);
        res.json(results);
    });
};

exports.getDocument = (req, res, next) => {
    connection.query(`select * from documents where id = ${req.params.id}`, (error, results) => {
        if (error) next(error);
        res.json(results);
    });
};

exports.updateDocument = (req, res, next) => {
    const queryString = "update documents " +
        `set documentName="${req.body.documentName}", ` + 
        `document=${req.body.document}, ` + 
        `where id = ${req.params.id}`;
    
    connection.query(queryString, (error, results) => {
        if (error) next(error);
        res.json(results);
    });
};

exports.deleteDocument = (req, res, next) => {
    connection.query(`delete from documents where id = ${req.params.id}`, (error, results) => {
        if (error) next(error);
        res.json(results);
    });
}