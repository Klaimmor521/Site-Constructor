const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "cevilko183672",
    host: "localhost",
    post: 5432,
    database: "site_constructor"
})

module.exports = pool;