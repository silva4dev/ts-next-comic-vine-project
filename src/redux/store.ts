import { combineReducers, configureStore } from "@reduxjs/toolkit"
import characters from "./slices/characters";
import charactersDetails from "./slices/charactersDetails";

const reducers = combineReducers({
  characters,
  charactersDetails
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
