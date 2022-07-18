import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import PaymentSlice from "./slice/PaymentSlice";
import adultCountSlice from "./slice/adultCountSlice";
import youthCountSlice from "./slice/youthCountSlice";
import childCountSlice from "./slice/childCountSlice";
const logger = createLogger();

const store = configureStore({
  reducer: {
    PaymentSlice:PaymentSlice,
    adultCount: adultCountSlice,
    youthCount: youthCountSlice,
    childCount: childCountSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    
      serializableCheck: false,
    }),
  devTools: true,
  serializableCheck: false,
});

export default store;
