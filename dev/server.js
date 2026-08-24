const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
};

http
  .createServer((req, res) => {
    const url = req.url.split("?")[0];
    let filePath = url === "/" ? "/index.html" : url;
    filePath = path.join(__dirname, "..", filePath);

    if (!path.extname(filePath)) {
      if (fs.existsSync(filePath + ".html")) {
        filePath += ".html";
      }
    }

    const ext = path.extname(filePath);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("404 Not Found");
        return;
      }
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(PORT, () => {
    console.log(`Dev server running at http://localhost:${PORT}`);
  });
