import express from "express";
const router = express.Router();


import {
    createNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controllers/notes.js";

router.post("/", createNote);
router.get("/", getNotes);
router.get("/:id", getNote);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);


export default router;
