import fs from "fs";

const data = fs.readFileSync("./cucumber-report.json", "utf-8");

const report = JSON.parse(data);

const scenarios = report.scenarios || [];

let total = scenarios.length;
let pass = scenarios.filter((s) => s.status === "pass").length;
let failed = scenarios.filter((s) => s.status === "failed").length;
let undefile = scenarios.filter((s) => s.status === "undefile").length;

console.log("ket qua kiem thu");
console.log(`tong so scenarios: ${total}`);
console.log(`số scenarios pass:${pass}`);
console.log(`so scenarios failed:${failed}`);
console.log(`so scenarios undefile:${undefile}`);
