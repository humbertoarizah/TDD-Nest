export default () => ({
  environment: process.env.NODE_ENV || 'dev',
  MONGO_URI: process.env.MONGO_URI,
  port: process.env.PORT || 3000,
  defaultLimit: +process.env.DEFAULT_LIMIT || 10,
  secret: process.env.JWT_SECRET || 'RandomKey',
});
