import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StorageService } from "../../services/StorageService";

interface Todo {
   title: string;
   completed: boolean;
}

interface TodoState {
   // todo: Todo;
   todos: Todo[];
}

// const { save, get } = useLocalStorage();

const initialState = {
   todos: StorageService.get(),
} as TodoState;

const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {
      addTodo(state, action) {
         state.todos.unshift(action.payload);
         StorageService.save(state.todos);
      },
      deleteTodo(state, action: PayloadAction<number>) {
         state.todos.splice(action.payload, 1);
         StorageService.save(state.todos);
      },
      toggleTodo(state, action) {
         const { index } = action.payload;
         const todo = state.todos[index];
         todo.completed = !todo.completed;
         StorageService.save(state.todos);
      },
      toggleAllTodo(state, action) {
         const newState: any = state.todos.map((todo) => {
            return { ...todo, completed: !action.payload };
         });
         state.todos = newState;
         StorageService.save(state.todos);
      },
      clearCompleted(state) {
         const newState = state.todos.filter((todo) => !todo.completed);
         state.todos = newState;
         StorageService.save(state.todos);
      },
      updateTodo(state, action) {
         const { index, title } = action.payload;
         state.todos[index].title = title;
         StorageService.save(state.todos);
      },
   },
});

export const {
   addTodo,
   deleteTodo,
   toggleTodo,
   toggleAllTodo,
   clearCompleted,
   updateTodo,
} = todoSlice.actions;

// export const todoSelector = u

export default todoSlice.reducer;
