# 1. Elige una imagen base oficial de Node
FROM node:18-alpine

# 2. Fija el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copia los archivos de dependencias (package.json, package-lock.json)
COPY package*.json ./

# 4. Instala las dependencias
RUN npm install

# 5. Copia el resto de tu proyecto al contenedor
COPY . .

# 6. Expone el puerto en el que corre tu servicio (por defecto 8081)
EXPOSE 8081

# 7. Arranca la aplicación
CMD ["npm", "start"]
