import { env } from "./config/config";
import { DbService } from "./config/db";
import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello, Mood Quest Backend is Working!");
});

const dbService = new DbService();

dbService
  .connect()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`🚀 Server is running on port ${env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });
