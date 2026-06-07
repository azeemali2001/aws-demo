const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "This is updated and Auto deployment!!!"
  });
});

app.listen(3000, () => {
  console.log("Server running");
});