import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
  reduce: {
    user: userReducer,
  },
});
