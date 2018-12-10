const Storage = require("@aula/webplayer-server/lib/storage");
const Live = require("@aula/webplayer-server/lib/live");

module.exports = {
  get: async (req, res, next) => {
    const result = await Storage.list();
    return res.json(result);
  },
  post: async (req, res, next) => {
    // TODO: validate empty files
    const { originalname: filename, buffer, size } = req.file;
    try {
      const result = await Storage.upload(filename, buffer);
      await Live.upload(filename, buffer);
      Live.add({ filename, size });

      return res.json(result);
    } catch (e) {
      return res.status(400).json({ message: e.toString() });
    }
  }
};
