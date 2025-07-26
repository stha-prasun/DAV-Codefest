import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import adminSlice from "./adminSlice.js";
import coursesSlice from "./coursesSlice.js";

const store = configureStore({
  reducer: {
    User: userSlice,
    Admin: adminSlice,
    Courses: coursesSlice,
  },
});

export default store;