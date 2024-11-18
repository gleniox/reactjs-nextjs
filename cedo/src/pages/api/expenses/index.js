import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  const method = req?.method;
  const jsonFile = path.resolve("./", "expenses.json");
  const readFileData = await readFile(jsonFile);
  const expenses = JSON.parse(readFileData).expenses;
  await delay(1000);

  switch (method) {
    case "GET":
      try {
        if (!expenses) {
          res.status(404).send("Error: Request failed with status code 404");
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).send(JSON.stringify(expenses, null, 2));
          console.log("GET /api/expenses  status: 200");
        }
      } catch (e) {
        console.log("/api/expenses error:", e);
      }
      break;

    case "POST":
      try {
        const recordFromBody = req?.body;
        recordFromBody.id = Math.max(...expenses.map((h) => h.id)) + 1;
        const newExpensesArray = [...expenses, recordFromBody];
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              expenses: newExpensesArray,
            },
            null,
            2
          )
        );
        res.status(200).json(recordFromBody);
        console.log(`POST /api/expenses status: 200`);
      } catch (e) {
        console.log("/api/expenses POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
