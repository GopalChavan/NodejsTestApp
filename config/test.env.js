const prod = {
  app: {
    port: process.env.PORT || 3002
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'AppOneTestDB'
  }
};
module.exports = prod