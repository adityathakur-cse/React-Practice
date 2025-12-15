import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./ReduxTodo/TodoSlicer";

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});

export default store;
