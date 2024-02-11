const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mainRoutes = require('./routes');
const mongodb = require('./db/connect');
const swaggerUi = require('swagger-ui-express');
const app = express();
const swaggerFile = require('./swagger.json'); 
const port = 3000;

// Middleware and other setup
app.use(cors());
app.use(express.json());

// Routes
app.use('/', mainRoutes);
app.use('/spells', require('./routes/spells'));
app.use('/skills', require('./routes/skills'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});