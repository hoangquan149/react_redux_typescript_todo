import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../stores/todo";

const initReducer = {
   todos: todosReducer,
};

export const store = configureStore({
   reducer: initReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
