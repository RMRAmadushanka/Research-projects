import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

const NoteModal = mongoose.model("Note", noteSchema);

export default NoteModal;
