import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    Question: [],
  },
  reducers: {
    setQuestion: (state, action) => {
      state.Question = action.payload;
    },
  },
});

export const { setQuestion } = questionSlice.actions;
export default questionSlice.reducer;