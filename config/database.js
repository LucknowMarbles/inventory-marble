const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    },
  }
});
