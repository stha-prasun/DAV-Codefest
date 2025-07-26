import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import adminSlice from "./adminSlice.js";
import coursesSlice from "./coursesSlice.js";
import courseSlice from "./courseSlice.js";

const store = configureStore({
  reducer: {
    User: userSlice,
    Admin: adminSlice,
    Courses: coursesSlice,
    Course: courseSlice,
  },
});

export default store;