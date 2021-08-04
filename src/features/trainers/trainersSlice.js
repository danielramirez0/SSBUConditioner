import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTermsAPI, getTechsAPI } from "../../services/app";

const initialState = {
  termsProgress: [],
  techsProgress: [],
  terms: [],
  techs: [],
  displayTab: 0,
};

export const getTerms = createAsyncThunk("trainers/getTermsAPI", async () => {
  const response = await getTermsAPI();
  return response.data;
});

export const getTechs = createAsyncThunk("trainers/getTechsAPI", async () => {
  const response = await getTechsAPI();
  return response.data;
});

export const trainersSlice = createSlice({
  name: "trainers",
  initialState,
  reducers: {
    saveTermsProgress: (state, action) => {
      state.termsProgress = action.payload;
    },
    saveTechsProgress: (state, action) => {
      state.techsProgress = action.payload;
    },
    changeDisplayTab: (state, action) => {
      state.displayTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTerms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTerms.fulfilled, (state, action) => {
        state.status = "idle";
        state.terms = action.payload;
      })
      .addCase(getTerms.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getTechs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTechs.fulfilled, (state, action) => {
        state.status = "idle";
        state.techs = action.payload;
      })
      .addCase(getTechs.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { saveTechsProgress, saveTermsProgress, changeDisplayTab } = trainersSlice.actions;

export const selectTermsProgress = (state) => state.trainers.termsProgress;
export const selectTerms = (state) => state.trainers.terms;
export const selectTechs = (state) => state.trainers.techs;
export const selectDisplayTab = (state) => state.trainers.displayTab;

export default trainersSlice.reducer;
