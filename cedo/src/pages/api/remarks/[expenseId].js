import path from "path";
import fs from "fs";
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req, res) {
  const expenseId = parseInt(req?.query?.expenseId);
  const method = req?.method;
  const jsonFile = path.resolve("./", "remarks.json");

  async function getRemarksData() {
    const readFileData = await readFile(jsonFile);
    return JSON.parse(readFileData).remarks;
  }

  switch (method) {
    case "GET":
      try {
        await delay(1000);
        const remarks = await getRemarksData();
        const filteredRemarks = remarks.filter(
          (rec) => rec.expenseId === expenseId
        );
        if (!remarks)
          res.status(404).send("Error: Request failed with status code 404");

        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(filteredRemarks, null, 2));

        console.log(`GET /api/remarks/${expenseId} status: 200`);
      } catch {
        console.log("/api/remarks error:", e);
      }

      break;
    case "POST":
      try {
        await delay(1000);
        const recordFromBody = req?.body;
        const remarks = await getRemarksData();
        recordFromBody.id = Math.max(...remarks.map((b) => b.id)) + 1;
        const newRemarksArray = [...remarks, recordFromBody];
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              remarks: newRemarksArray,
            },
            null,
            2
          )
        );
        res.status(200).json(recordFromBody);
        console.log(`POST /api/remarks/${expenseId} status: 200`);
      } catch (e) {
        console.log("/api/remarks POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
