const fs = require("fs");
const path = require("path");

const files = ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"];
const srcDir = path.join(__dirname, "..", "node_modules", "maplibre-gl", "dist");
const destDir = path.join(__dirname, "..", "public", "maplibre");

fs.mkdirSync(destDir, { recursive: true });
for (const file of files) {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
}