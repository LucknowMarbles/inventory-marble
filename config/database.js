const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });



module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-54-165-178-178.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd4d2m9bvdi8gmo'),
        username: env('DATABASE_USERNAME', 'mgochqsrhrftcl'),
        password: env('DATABASE_PASSWORD', 'd15652676187cb8daddcb5cf26bfee0824652bd53220675d2241c590ff58f8c4'), 
        //add this line
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },     
      },
      // add this line
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
