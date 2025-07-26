import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    Questions: [],
  },
  reducers: {
    setQuestions: (state, action) => {
      state.Questions = action.payload;
    },
  },
});

export const { setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;