const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const propertiesRoutes = require("./routes/propertiesRoutes");
const ownersRoutes = require("./routes/ownersRoutes");
const requestsRoutes = require("./routes/requestsRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: (origin, callback) => {
      try {
        const allowedOrigins = JSON.parse(process.env.CORS_ORIGIN || "[]");

        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("No permitido por CORS."));
        }
      } catch (error) {
        console.error("Error al procesar los orígenes permitidos:", error.message);
        callback(new Error("Error de configuración en CORS."));
      }
    }
  })
);

app.use("/api/properties", propertiesRoutes);
app.use("/api/owners", ownersRoutes);
app.use("/api/requests", requestsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error del servidor");
});

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

