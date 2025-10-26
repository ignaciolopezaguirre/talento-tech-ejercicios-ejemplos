import os from "os";
import path from "path";
import fs from "node:fs";

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.uptime() / 60 / 60);
console.log(`en windows la separacion de la ruta es con una --> ${path.sep}`);
const filePatch = path.join("content", "subfolder", "test.txt");
console.log(filePatch);
console.log(process.cwd())
