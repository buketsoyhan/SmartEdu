const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Main Page");
});

app.get("*", (req, res) => {
    res.status(404).send("404 Page Not Found");
  });

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
