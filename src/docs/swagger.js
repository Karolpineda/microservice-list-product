// src/docs/swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Microservicio de Productos",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
    },
  },
  apis: ["./src/routes/productRoutes.js"], 

};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;