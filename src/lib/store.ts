import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./features/checkout/checkoutSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      checkout: checkoutReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
