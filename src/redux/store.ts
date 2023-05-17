import { combineReducers, configureStore } from "@reduxjs/toolkit"
import characters from "./slices/characters";

const reducers = combineReducers({
  characters,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
