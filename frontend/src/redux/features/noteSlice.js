import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createNote = createAsyncThunk(
  "note/createNote",
  async ({ values }, { rejectWithValue }) => {
    try {
      console.log(values);
      const response = await api.createNote(values);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getNotes = createAsyncThunk(
  "note/getNotes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getNotes();
      console.log(response);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getNote = createAsyncThunk(
  "note/getNote",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getNote(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);



export const deleteNote = createAsyncThunk(
  "note/deleteNote",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await api.deleteNote(_id);
      window.location.reload();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateNote = createAsyncThunk(
  "note/updateNote",
  async ({ id, updatedTourData}, { rejectWithValue }) => {
    try {
      const response = await api.updateNote(updatedTourData, id);
     
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createNote.pending]: (state, action) => {
      state.loading = true;
    },
    [createNote.fulfilled]: (state, action) => {
      state.loading = false;
      state.notes = [action.payload];
    },
    [createNote.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getNotes.pending]: (state, action) => {
      state.loading = true;
    },
    [getNotes.fulfilled]: (state, action) => {
      state.loading = false;
      state.notes = action.payload;
    },
    [getNotes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getNote.pending]: (state, action) => {
      state.loading = true;
    },
    [getNote.fulfilled]: (state, action) => {
      state.loading = false;
      state.notes = action.payload;
    },
    [getNote.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    }
    ,
    [deleteNote.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteNote.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.notes = state.notes.filter((item) => item._id !== id);
 
      }
    },
    [deleteNote.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateNote.pending]: (state, action) => {
      state.loading = true;
    },
    [updateNote.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.notes = state.notes.map((item) =>
          item._id === id ? action.payload : item
        );
        
      }
    },
    [updateNote.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default noteSlice.reducer;
