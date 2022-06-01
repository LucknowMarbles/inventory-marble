module.exports = ({ env }) => ({
  host: process.env.HOST || "0.0.0.0" ,
  port: process.env.PORT || 3000,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
