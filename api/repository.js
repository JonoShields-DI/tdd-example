const db = require('./db');

const createProduct = async (name, description) => {
    return await db.query(`INSERT INTO example ("name", "description") values ($1, $2)`, [name, description])
}

module.exports = {
    createProduct
}