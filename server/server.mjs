import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import cors from "cors";
import { corsOptions } from "./config/corsOptions.mjs";

const PORT = process.env.PORT || 3500;

app.use(cors(corsOptions));

// Report route handler
app.post("/report", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
