import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CharacterState = {
  characters: any[];
  currentPage: number;
  loading: boolean;
};

const initialState: CharacterState = {
  characters: [],
  currentPage: 1,
  loading: true,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<any>) => {
      state.characters = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCharacters, setCurrentPage, setLoading } = charactersSlice.actions;

export default charactersSlice.reducer;
