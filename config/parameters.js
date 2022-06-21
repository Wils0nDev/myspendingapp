require("dotenv").config();

const paremeters = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
              trustServerCertificate: true,
  
    },
  };

  module.exports = paremeters