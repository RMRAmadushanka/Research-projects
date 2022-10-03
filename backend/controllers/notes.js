import NoteModel from "../models/notes.js";
import mongoose from "mongoose";

export const createNote= async (req, res) => {
  const note = req.body;
  const newNote = new NoteModel({
    ...note,
    createdAt: new Date().toISOString(),
  });

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await NoteModel.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};



export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No tour exist with id: ${id}` });
    }
    await NoteModel.findByIdAndRemove(id);
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No Note exist with id: ${id}` });
    }

    const updatedNote = {
    
      title,
      description,
      _id: id,
    };
    await NoteModel.findByIdAndUpdate(id, updatedNote, { new: true });
    res.json(updatedNote);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
