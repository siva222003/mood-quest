import dotenv from "dotenv";
import path from "path";
const envPath = path.resolve(__dirname, "../.env"); //irrespective CWD path is fixed
dotenv.config({ path: envPath });

// Import the 'express' module
import express, { Request, Express } from "express";

// Create an Express application
const app = express();

// Set the port number for the server
const port = 3000;

// Define a route for the root path ('/')
app.get("/", (req, res) => {
  // Send a response to the client
  res.send("Hello, TypeScript + Node.js + Express!");
});
// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`⚡️Server is running on http://localhost:${port}`);
});
