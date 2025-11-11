import fs from "fs";

const data = fs.readFileSync("./cucumber-report.json", "utf-8");

const report = JSON.parse(data);

const scenarios = report.scenarios || [];

let total = scenarios.length;
let passed = scenarios.filter((s) => s.status === "passed").length;
let failed = scenarios.filter((s) => s.status === "failed").length;
let undefinedCount = scenarios.filter((s) => s.status === "undefined").length;

console.log(" Kết quả kiểm thử:");
console.log(`Tổng số scenarios: ${total}`);
console.log(` Passed: ${passed}`);
console.log(` Failed: ${failed}`);
console.log(` Undefined: ${undefinedCount}`);
