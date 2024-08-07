import dotenv from "dotenv";
import path from "path";
const envPath = path.resolve(__dirname, "../.env"); 
dotenv.config({ path: envPath });

import express, { Request } from "express";
const app = express();
const port = process.env.PORT || 3000;


app.get("/", (req: Request, res) => {
  console.log(req.authenticated)
  res.send("Hello, TypeScript Node Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
