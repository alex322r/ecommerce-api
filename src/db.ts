import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'alexis',
    password: 'uchiha',
    database: 'ecommercedb'
})

export default pool