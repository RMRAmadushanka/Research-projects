import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import noteRouter from "./routes/notes.js";

const app = express();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express());
app.use(cors());


app.use("/note", noteRouter);

const MONGODB_URL = "mongodb+srv://rmra:1998@cluster0.iqgri.mongodb.net/CinemaOnline?retryWrites=true&w=majority";
const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
