const Storage = require("@aula/webplayer-server/lib/storage");

module.exports = {
  get: async (req, res, next) => {
    const result = await Storage.list();
    return res.json(result);
  },
  post: async (req, res, next) => {
    try {
      const result = await Storage.upload(
        req.file.originalname,
        req.file.buffer
      );

      return res.json(result);
    } catch (e) {
      return res.status(400).json({ message: e.toString() });
    }
  }
};
