const express = require("express");

module.exports = function(app) {
  const v1 = express.Router();
  app.use("/api/v1", v1);

  v1.get("/songs", (req, res, next) => {});

  v1.get("/live", (req, res, next) => {});
  v1.post("/live", (req, res, next) => {});

  v1.post("/upload", (req, res, next) => {});
};
