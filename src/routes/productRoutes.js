const express = require("express");
const { createProduct } = require("../controllers/productController");
const router = express.Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Verifica si el microservicio está activo
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Retorna un mensaje de estado.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/health", (req, res) => {
  return res.status(200).json({
    status: "OK",
    message: "Hola Juanpabllo",
  });
});

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Products]
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
 *         description: Producto creado exitosamente.
 *       400:
 *         description: Faltan campos obligatorios.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/products", createProduct);

module.exports = router;
