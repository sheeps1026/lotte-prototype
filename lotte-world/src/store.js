import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import noticeSlice from "./slice/noticeSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
      notice:noticeSlice
  },
  middleware: [...getDefaultMiddleware({serialzableCheck:false})],
  devTools: true,
});

export default store;
