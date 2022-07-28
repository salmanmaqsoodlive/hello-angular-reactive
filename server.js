const express = require("express");
const _port = process.env.PORT || 5000;
const _app_folder = "dist/hello-world";
const app = express();

// ---- SERVE STATIC FILES ---- //
app.get("*.*", express.static(_app_folder, { maxAge: "1y" }));

// ---- SERVE APLICATION PATHS ---- //
app.all("*", function (req, res) {
  res.status(200).sendFile(`/`, { root: _app_folder });
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, function () {
  console.log(
    "Node Express server for " +
      app.name +
      " listening on http://localhost:" +
      _port
  );
});
