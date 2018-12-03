const express = require("express");

const routes = require("@aula/webplayer-server/routes");

const app = express();
const PORT = process.env.PORT || 3000;

routes(app);

app.listen(PORT, () => {
  console.log("listening on", PORT);
});
