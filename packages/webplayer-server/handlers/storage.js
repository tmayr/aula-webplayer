const Storage = require("@aula/webplayer-server/lib/storage");

module.exports = {
  get: (req, res, next) => {
    res.json({ foo: "bar" });
  },
  stream: (req, res, next) => {},
  download: (req, res, next) => {},
  upload: (req, res, next) => {}
};
