const express = require("express");
const Handlers = require("@aula/webplayer-server/handlers");

module.exports = function(app) {
  const v1 = express.Router();
  app.use("/api/v1", v1);

  v1.get("/now-playing", Handlers["now-playing"].get);
  v1.post("/now-playing", Handlers["now-playing"].post);

  v1.get("/storage", Handlers.storage.get);
  v1.post("/storage/upload", Handlers.storage.upload);
  v1.get("/storage/download", Handlers.storage.download);
  v1.get("/storage/stream", Handlers.storage.stream);
};
