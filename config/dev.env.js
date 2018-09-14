const dev = {
  app: {
    port: process.env.PORT || 3002
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'AppOneDevDB'
  }
};
module.exports = dev