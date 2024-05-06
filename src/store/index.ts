// imports
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import jobReducer from "./job/index";

export default configureStore({
  reducer: {
    job: jobReducer,
  },
});
