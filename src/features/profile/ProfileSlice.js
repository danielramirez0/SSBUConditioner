import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getProfileAPI } from "../../services/user";

// const profileAdapter = createEntityAdapter();
// const initialState = profileAdapter.getInitialState({});
const initialState = {};

export const getProfile = createAsyncThunk("profile/getProfileAPI", async (options) => {
  const response = await getProfileAPI(options);
  return response.data;
});

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    goalToggled(state, action) {
      const goalId = action.payload;
      const goal = state.entities[goalId];
      goal.completed = !goal.completed;
    },
    setProfile: (state) => {
      state.mainCharacter = "";
    },
    updateGoals: (state, action) => {
      state.goals = action.payload;
    },
    setMain: (state, action) => {
      state.mainCharacter = action.payload;
    },
    setAlts: (state, action) => {
      state.alternateCharacters = action.payload;
    },
    setGeneralKnowledgeProgress: (state, action) => {
      state.generalKnowledgeProgress = action.payload;
    },
    setGereralTechniqueProgress: (state, action) => {
      state.generalTechniqueProgress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = "idle";
        state.refID = action.payload.refID;
        state.goals = action.payload.goals;
        state.mainCharacter = action.payload.mainCharacter;
        state.alternateCharacters = action.payload.alternateCharacters;
        state.activeStudyingCharacter = action.payload.activeStudyingCharacter;
        state.generalKnowledgeProgress = action.payload.generalKnowledgeProgress;
        state.generalTechniqueProgress = action.payload.generalTechniqueProgress;
        state.characterKnowledgeProgress = action.payload.characterKnowledgeProgress;
      })
      .addCase(getProfile.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  setProfile,
  setGeneralKnowledgeProgress,
  setGereralTechniqueProgress,
  updateGoals,
  goalToggled,
  setMain,
  setAlts,
} = profileSlice.actions;

export const selectProfile = (state) => state.profile;
export const selectProfileTermProgress = (state) => state.profile.generalKnowledgeProgress;
export const selectProfileTechProgress = (state) => state.profile.generalTechniqueProgress;
export const selectGoals = (state) => state.profile.goals;
export const selectUserId = (state) => state.profile.refID;

export default profileSlice.reducer;
