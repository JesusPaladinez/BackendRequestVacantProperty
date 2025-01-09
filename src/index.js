const app = express();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const propertiesRoutes = require("./routes/propertiesRoutes");
const ownersRoutes = require("./routes/ownersRoutes");
const requestsRoutes = require("./routes/requestsRoutes");
require("dotenv").config();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

const port = process.env.PORT || 9000;

app.use(express.json());
app.use("/api/properties", propertiesRoutes);
app.use("/api/owners", ownersRoutes);
app.use("/api/requests", requestsRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB Atlas");
    app.listen(port, () => {
      console.log(`Servidor ejecutandose en http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectarse a MongoDB Atlas:", error);
  });
