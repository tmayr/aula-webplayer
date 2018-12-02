const express = require("express");

const routes = require("@aula/webplayer-server/routes");

const app = express();
const PORT = process.env.PORT;

routes(app);

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
