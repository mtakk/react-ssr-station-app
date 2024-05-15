import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import express from "express";
import path from "path";
import fs from "fs";

const Port = process.env.PORT || 9000;
const app = express();
// app.use(express.static("."));
app.use(express.static(path.resolve(__dirname, "../dist")));

// app.get("/react-ssr-station-app", (req, res) => {
//   const htmlElement = ReactDOMServer.renderToString(
//     React.createElement(<App />)
//   );
//   const tmp = fs.readFileSync("./dist/index.html", "utf-8");
//   const html = tmp.replace("{{content}}", htmlElement);
//   res.status(200).send(html);
// });

const html = ReactDOMServer.renderToString(<App />);
const responseHtml = `
  <html>
    <head>
      <title>Reactjs-4</title>
      <link rel="stylesheet" href="/styles.css" type="text/css"/>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/client.js"></script>
    </body>
  </html>
`;
app.get("/", (req, res) => {
  res.send(responseHtml);
});

app.listen(Port, () => console.log("サーバが立ち上がりました。"));