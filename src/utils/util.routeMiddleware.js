const CategoriesRoute = require('../routes/route.categories');

module.exports = (app) => {
  app.use('/api', CategoriesRoute);
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to API-Testing',
    });
  });
};
