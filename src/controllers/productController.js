const Product = require("../models/productModel");

const listProducts = async (req, res) => {
  try {
    // Obtener todos los productos de la base de datos
    const products = await Product.findAll();

    // Si no hay productos, devolver un mensaje adecuado
    if (products.length === 0) {
      return res.status(404).json({ message: "No se encontraron productos." });
    }

    // Devolver los productos encontrados
    return res.status(200).json({
      message: "Productos obtenidos exitosamente.",
      products: products
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return res.status(500).json({
      message: "Error interno del servidor."
    });
  }
};

module.exports = { listProducts };
