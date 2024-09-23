const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const poultryRoutes = require("./routes/poultryRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Poultry Farm Management API");
});

app.use("/", poultryRoutes);

app.listen(port, () => console.log('Listening on port ${port}'));