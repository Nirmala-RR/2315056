const express = require("express");
const cors = require("cors");

const notificationRoutes = require("./routes/notificationRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use("/api", notificationRoutes);

module.exports = app;