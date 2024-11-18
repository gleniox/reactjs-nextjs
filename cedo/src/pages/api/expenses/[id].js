import path from "path";
import fs from "fs";
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req, res) {
  const id = parseInt(req?.query?.id);
  const jsonFile = path.resolve("./", "expenses.json");
  const readFileData = await readFile(jsonFile);
  await delay(1000);
  const expenses = JSON.parse(readFileData).expenses;
  const expense = expenses.find((rec) => rec.id === id);
  if (expense) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(expense);
  } else {
    res.status(404).send("expense not found");
  }
  console.log(`GET /api/expenses/${id} status: 200`);
}
