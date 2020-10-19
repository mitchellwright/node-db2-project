const express = require("express");
const carsRouter = require("./cars/carsRouter");

const server = express();

server.use(express.json());
server.use(carsRouter);

server.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
