import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../pages/profile/userSlice";
import catReducer from "../pages/category/categorySlice";
import modalReducer from "../system-state/systemSlice";
export default configureStore({
  reducer: {
    adminInfo: adminReducer,
    catInfo: catReducer,
    modalInfo: modalReducer,
  },
});
