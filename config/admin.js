module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','r9BJZjRTI9/agoYMOFwZ2Q=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','r9BJZjRTI9/agoYMOFwZ2Q==r9BJZjRTI9/agoYMOFwZ2Q=='),
  },
});
