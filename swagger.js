const swaggerAutogen = require('swagger-autogen')();
const path = require('path');

const outputFile = path.resolve(__dirname, 'swagger.json');
const endpointsFiles = [
  path.resolve(__dirname, 'routes', 'index.js'),
  path.resolve(__dirname, 'routes', 'spells.js'),
  path.resolve(__dirname, 'routes', 'skills.js')
];

swaggerAutogen(outputFile, endpointsFiles, (err, done) => {
  if (err) {
    console.error('Error generating Swagger documentation:', err);
  } else {
    console.log('Swagger documentation generated successfully:', done);
  }
});