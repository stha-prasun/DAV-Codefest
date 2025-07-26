import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    Course: [],
  },
  reducers: {
    setCourse: (state, action) => {
      state.Course = action.payload;
    },
  },
});

export const { setCourse } = courseSlice.actions;
export default courseSlice.reducer;