const express = require("express");
const { updateProduct } = require("../controllers/productController");
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
    message: "CONEXION EXISTOSA",
  });
});


/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualiza un producto existente
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nuevo nombre del producto
 *                 example: "Producto actualizado"
 *               stock:
 *                 type: integer
 *                 description: Nuevo stock del producto
 *                 example: 100
 *               updatedBy:
 *                 type: string
 *                 format: uuid
 *                 description: Usuario que realiza la actualización
 *                 example: "3fd2f32b-7b7b-4c2c-9a5a-815f8d6c5a4d"
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente.
 *       400:
 *         description: Faltan campos obligatorios o datos inválidos.
 *       404:
 *         description: Producto no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.put("/products/:id", updateProduct);

module.exports = router;
