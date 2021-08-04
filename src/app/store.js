import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/LoginSlice";
import characterReducer from "../features/characters/CharactersSlice";
import profileReducer from "../features/profile/ProfileSlice";
import trainersReducer from "../features/trainers/trainersSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    characters: characterReducer,
    profile: profileReducer,
    trainers: trainersReducer,
  },
});
