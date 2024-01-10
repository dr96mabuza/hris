exports.getAllEmployees = (database) => {
    return database.query("select * from employees", (err) => {
        if (err) return err;
    });
};

exports.addEmployee = (database, data) => {
    const query = ``;
    database.query(query , (err) => {
        if (err) return err;
    });
}

exports.getEmployee = (id) => {
    "get employee by id";
}

exports.updateEmployee = (id, employee) => {
    "update employee";
}

exports.deleteEmployee = (id) => {
    "delete employee by id";
}