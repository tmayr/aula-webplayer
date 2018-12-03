const express = require("express");
const Handlers = require("@aula/webplayer-server/handlers");

module.exports = function(app) {
  const v1 = express.Router();
  app.use("/api/v1", v1);

  v1.get("/presence", Handlers.presence.get);
  v1.post("/presence", Handlers.presence.post);

  v1.post("/storage", Handlers.storage.post);
  v1.get("/storage", Handlers.storage.get);
};
