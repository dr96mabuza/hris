const database = require("../database");
exports.connect_to_database = database.query("USE hris", (error) => {
    if (error) {
        throw error;
    }
    console.log("hris database in use!");
});