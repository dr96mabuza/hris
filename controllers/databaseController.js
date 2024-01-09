const database = require("../database");
exports.connect_to_database = database.query("CREATE DATABASE hris", (err) => {
    if (err) {
        throw err;
    }
    console.log("created");
    database.query("USE hris", (error) => {
        if (error) {
            throw error;
        }
        console.log("in use");
    });

});