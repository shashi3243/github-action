const express = require("express");
const app = express();

const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Hello World.",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
