import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CharacterDetailState = {
  character: any[];
  loading: boolean;
};

const initialState: CharacterDetailState = {
  character: [],
  loading: true,
};

const charactersDetailsSlice = createSlice({
  name: "charactersDetails",
  initialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<any>) => {
      state.character = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCharacter,setLoading } = charactersDetailsSlice.actions;

export default charactersDetailsSlice.reducer;
