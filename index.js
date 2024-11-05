import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 8080;

app.get("/", async (req, res) => {
  res.send({ status: true, message: "services geting run" });
});

app.use("/api", routes());

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
