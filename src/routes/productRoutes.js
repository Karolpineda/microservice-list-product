const express = require("express");
const axios = require("axios");
const { listProducts } = require("../controllers/productController");
const router = express.Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Verifica si el microservicio está activo
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Retorna un mensaje de estado del microservicio de listado de productos.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/health", (req, res) => {
  return res.status(200).json({
    status: "OK",
    message: "Microservicio de Listado de Productos activo",
  });
});

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crea un nuevo producto (redirige al microservicio de creación)
 *     tags: [Products]
 *     description: Esta ruta redirige la solicitud al microservicio de creación de productos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del producto
 *                 example: "Producto de prueba"
 *               stock:
 *                 type: integer
 *                 example: 50
 *               createdBy:
 *                 type: string
 *                 format: uuid
 *                 example: "6fa704f0-5945-41a3-abbe-08120b7f7223"
 *               updatedBy:
 *                 type: string
 *                 format: uuid
 *                 example: "2cc42cd1-2e1f-4adb-8623-c63eedb56ff9"
 *     responses:
 *       201:
 *         description: Producto creado exitosamente en el microservicio de creación.
 *       400:
 *         description: Faltan campos obligatorios.
 *       500:
 *         description: Error en la comunicación con el microservicio de creación.
 */
router.post("/products", async (req, res) => {
  try {
    const response = await axios.post("http://microservice-create-product/api/products", req.body);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error en la comunicación con el microservicio de creación:", error.message);
    return res.status(500).json({ message: "Error en el microservicio de creación." });
  }
});

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene una lista de todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Productos obtenidos exitosamente."
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Producto 1"
 *                       stock:
 *                         type: integer
 *                         example: 100
 *                       createdBy:
 *                         type: string
 *                         format: uuid
 *                         example: "6fa704f0-5945-41a3-abbe-08120b7f7223"
 *                       updatedBy:
 *                         type: string
 *                         format: uuid
 *                         example: "2cc42cd1-2e1f-4adb-8623-c63eedb56ff9"
 *       404:
 *         description: No se encontraron productos en la base de datos.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/products", listProducts);

module.exports = router;
