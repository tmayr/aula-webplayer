module.exports = class Storage {
  constructor() {
    this.validGetTypes = ["metadata", "stream", "download"];
  }
  // still not sure about the methods
  // trying to be restful but might not be worth it
  get(path, options = { type: "metadata" }) {
    if (!this.validGetTypes.includes(options.type)) {
      throw new Error(
        "Invalid type, please use one of: " + this.validGetTypes.join(", ")
      );
    }
  }
  post(path, file) {}
};
