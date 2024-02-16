require('dotenv').config();

module.exports = {
  development: {
    username: process.env.D_DB_USERNAME,
    password: process.env.D_DB_PASSWORD,
    database: process.env.D_DB_NAME,
    host: process.env.D_DB_HOST,
    dialect: process.env.T_DB_DIALECT,
  },
  test: {
    username: process.env.T_DB_USERNAME,
    password: process.env.T_DB_PASSWORD,
    database: process.env.T_DB_NAME,
    host: process.env.T_DB_HOST,
    dialect: process.env.T_DB_DIALECT,
  },
  production: {
    username: process.env.P_DB_USERNAME,
    password: process.env.P_DB_PASSWORD,
    database: process.env.P_DB_NAME,
    host: process.env.P_DB_HOST,
    dialect: process.env.P_DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};