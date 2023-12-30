import { configureStore } from "@reduxjs/toolkit";
import shareSlice from "./shares/shareSlice";
import userSlice from "./modules/user/userSlice";
import dashboardSlice from "./modules/dashboard/dashboardSlice";

export const stores = configureStore({
   reducer: {
    share: shareSlice,
    user: userSlice,
    dashboard: dashboardSlice,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
  })

})