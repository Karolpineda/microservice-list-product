const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT || 8084;

(async () => {
  try {
    // Sincroniza la base de datos (crea tablas si no existen)
    await sequelize.sync();
    console.log("Base de datos sincronizada.");

    // Inicia el servidor
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
})();