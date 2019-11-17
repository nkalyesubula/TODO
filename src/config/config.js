const dotenv = require("dotenv");
dotenv.config();

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    port: 5432
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: "anda_test",
    host: DB_HOST,
    dialect: "postgres",
    port: 5432
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  }
};
