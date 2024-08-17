import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

export const env = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  CLIENT_URL: process.env.CLIENT_URL!,
  SERVICE_MAIL: process.env.SERVICE_MAIL!,
  SERVICE_PASSWORD: process.env.SERVICE_PASSWORD!,
};
