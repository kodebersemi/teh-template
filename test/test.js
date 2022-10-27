const fs = require("fs");
const compile = require("../index");
const raw = fs.readFileSync("./index.teh", "utf-8");
const html = compile(raw, { nama: "jon" });
fs.writeFile("index.html", html, function (e) {
  if (e) console.log(e);
  console.log("saved");
});
// console.log(raw);
