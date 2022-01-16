
// Kaleb's Local workbench db
var mysql = require('mysql');

var dbconnect = {
getConnection: function() {
    var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Iamworth$5",
    database: "tether"
});
return conn;
}
};

module.exports = dbconnect