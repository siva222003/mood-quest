import { env } from "./config/config";
import { DbService } from "./config/db";
import express, { Request } from "express";
import morgan from "morgan";
import cors from "cors";
import { errorHandler } from "./middleware/error.middleware";
import { analyzeMood } from "./helpers/open-ai";

import questionnaireRouter from "./routes/questionnaire.routes";
import sectionRouter from "./routes/section.routes";
import questionRoutes from "./routes/question.routes";
import recommendationRoutes from "./routes/recommendation.routes";
import { ApiResponse } from "./utils/api-response";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/user", userRoutes);
app.use("/api/questionnaire", questionnaireRouter);
app.use("/api/section", sectionRouter);
app.use("/api/question", questionRoutes);
app.use("/api/recommendations", recommendationRoutes);

app.use(errorHandler);

app.get("/", (req: Request, res) => {
  res.send("Hello, Mood Quest Backend is Working!");
});

app.post("/api/ai", async (req, res) => {
  try {
    const answers = req.body.answers;

    const moods = await analyzeMood(answers);

    res.json(new ApiResponse(200, "Moods analyzed successfully", moods));
  } catch (error) {
    res.status(500).send({ error: "An error occurred" });
    console.error("Error analyzing mood:", error);
  }
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
