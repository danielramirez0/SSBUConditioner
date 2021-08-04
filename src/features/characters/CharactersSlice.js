import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./CharactersAPI";

const initialState = {
  list: [],
  activeCharacter: {},
};

export const getCharacters = createAsyncThunk("characters/fetchCharacters", async () => {
  const response = await fetchCharacters();
  return response.data;
});

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setActiveCharacter: (state, action) => {
      state.activeCharacter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = action.payload;
      })
      .addCase(getCharacters.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setActiveCharacter } = charactersSlice.actions;

export const selectList = (state) => state.characters.list;
export const selectActiveCharacter = (state) => state.activeCharacter;

export default charactersSlice.reducer;
