const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

express()
  .use(cors())
  .get("/", (req, res) => res.send({ message: "Hello World!" }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
