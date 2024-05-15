const express = require("express");

const PORT = 9000;
const app = express();

// app.use(express.static("public"));
console.log(process.env.REACT_APP_DIST_DIR);
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(PORT, () => {
  console.log(`サーバー起動：${PORT}`);
});
