require('dotenv').config();

module.exports = {
    DATABASE: process.env.DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    PORT: process.env.PORT,
    ENV: process.env.ENV,
}