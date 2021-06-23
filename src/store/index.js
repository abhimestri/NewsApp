import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./news-slice";
const store = configureStore({ reducer: newsSlice.reducer });
export default store;
