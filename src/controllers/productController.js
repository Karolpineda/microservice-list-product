const Product = require("../models/productModel");

// Función para listar todos los productos
const listProducts = async (req, res) => {
  try {
    // Recuperar todos los productos de la base de datos
    const products = await Product.findAll();  
    return res.status(200).json(products);  // Enviar la lista de productos en la respuesta
  } catch (error) {
    console.error("Error al listar productos:", error);
    return res.status(500).json({
      message: "Error interno del servidor."
    });
  }
};

module.exports = { listProducts };
