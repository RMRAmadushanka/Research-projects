import { configureStore } from "@reduxjs/toolkit";

import NoteReducer from "./features/noteSlice";

export default configureStore({
  reducer: {
    
    note: NoteReducer,
  },
});
