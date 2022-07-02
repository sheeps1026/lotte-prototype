import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import PaymentSlice from "./slice/PaymentSlice";
const logger = createLogger();

const store = configureStore({
  reducer: {
    payment:PaymentSlice
  },
  middleware: [...getDefaultMiddleware({serialzableCheck:false})],
  devTools: true,
});

export default store;
