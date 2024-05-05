import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./job/index";

export default configureStore({
  reducer: {
    job: jobReducer,
  },
});
