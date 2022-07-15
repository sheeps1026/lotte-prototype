import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import PaymentSlice from "./slice/PaymentSlice";
const logger = createLogger();

const store = configureStore({
  reducer: {
    PaymentSlice:PaymentSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    
      serializableCheck: false,
    }),
  devTools: true,
  serializableCheck: false,
});

export default store;
