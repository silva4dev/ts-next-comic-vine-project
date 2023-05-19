import { CharacterState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CharacterState = {
  characters: [],
  loading: true,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<any>) => {
      state.characters = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCharacters, setLoading } = charactersSlice.actions;

export default charactersSlice.reducer;
