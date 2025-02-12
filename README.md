# microservice-list-product

This project is a microservice created with Node.js and Express that allows you to list products from a database. The service is configured to run inside a Docker container, making it easy to deploy and portable.

## Technologies Used
- Node.js
- Docker
- Sequelize (ORM)
- MySQL (for the database)

## Description

This microservice allows you to perform CRUD operations on products in a database. The main endpoint it provides is to **LIST** products.

## Requirements

To run this project, you need to have the following programs installed:

- Docker
- Visual Studio Code
- **Node.js**: The recommended minimum version is 14.

## Dependencies

- **Sequelize**: ORM for interacting with the database.
- **MySQL2**: For connecting to MySQL.
- **Express**: Web framework for Node.js.
- **dotenv**: For managing environment variables.

## Steps to Run the Project

### 1. Clone the Repository

If you haven't downloaded the project yet, clone or download it from GitHub:

```bash
git clone https://github.com/Karolpineda/microservice-list-product.git
```
### 2. Build the Docker Image
In the project directory, run the following command to build the Docker image:
```bash
docker build -t <your-username>/microservice-list-product

```

### 3. Run the Project
After building the image, run the project with this command:
```bash
npm run start
```
The application will run at: http://localhost:8084

## API Usage
### List a Product
Endpoint: GET /api/products

This endpoint allows you to create a product in the database using the provided data.





