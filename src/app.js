const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Habilitar CORS (con configuraciones por defecto o personalizadas)
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.use("/api", productRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

module.exports = app;