import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import adminSlice from "./adminSlice.js";

const store = configureStore({
  reducer: {
    User: userSlice,
    Admin: adminSlice,
  },
});

export default store;