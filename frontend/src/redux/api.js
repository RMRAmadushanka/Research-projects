import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });



export const createNote = (noteData) => API.post("/note", noteData);
export const getNotes = () => API.get("/note");
export const getNote = (id) => API.get(`/note/${id}`);
export const deleteNote = (_id) => API.delete(`/note/${_id}`);
export const updateNote = (updatedNoteData, id) =>
  API.patch(`/note/${id}`, updatedNoteData);

