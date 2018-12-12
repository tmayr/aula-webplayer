const AWS = require("aws-sdk");

class Storage {
  constructor(
    accessKeyId,
    secretAccessKey,
    region,
    bucketName,
    s3ClientOptions = {}
  ) {
    // we are using the global config here, pretty bad idea
    AWS.config.update({ region, accessKeyId, secretAccessKey });
    this.client = new AWS.S3(s3ClientOptions);
    this.bucketName = bucketName;
  }
  async list() {
    // TODO: we should enrich this with Firebase info
    const { Contents } = await this.client
      .listObjects({ Bucket: this.bucketName })
      .promise();

    // naively return only mp3s and return a simplified dataset
    return Contents.filter(c => c.Key.includes(".mp3")).map(c => ({
      name: c.Key,
      size: c.Size,
      uploaded: c.LastModified
    }));
  }
  async upload(filename, payload) {
    // naively check if it's an mp3
    if (!filename.includes(".mp3")) throw new Error("not an mp3 file");

    // TODO: add validation to prevent overrides
    await this.client
      .putObject({
        Body: payload,
        Bucket: this.bucketName,
        Key: filename
      })
      .promise();

    return "ok";
  }
}

module.exports = new Storage(
  process.env.AWS_S3_KEY,
  process.env.AWS_S3_SECRET,
  process.env.AWS_S3_REGION,
  process.env.AWS_S3_BUCKET
);
