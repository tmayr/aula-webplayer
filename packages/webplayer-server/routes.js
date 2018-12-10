const express = require("express");
const multer = require("multer");
const cors = require("cors");

const Handlers = require("@aula/webplayer-server/handlers");

const multerStorage = multer.memoryStorage();
const uploadFileMiddleware = multer({
  dest: "/tmp/u",
  storage: multerStorage
}).single("file");

module.exports = function(app) {
  const v1 = express.Router();
  app.use("/api/v1", v1);

  v1.use(cors({ origin: "*" }));
  v1.get("/now-playing", Handlers["now-playing"].get);
  v1.post("/now-playing", Handlers["now-playing"].post);

  v1.get("/storage", Handlers.storage.get);
  v1.post("/storage", uploadFileMiddleware, Handlers.storage.post);
};
