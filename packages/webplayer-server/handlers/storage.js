const Storage = require("@aula/webplayer-server/lib/storage");

module.exports = {
  get: (req, res, next) => {
    res.json({ foo: "bar" });
  },
  post: (req, res, next) => {}
};
