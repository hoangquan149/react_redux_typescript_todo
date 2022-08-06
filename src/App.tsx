import React, {
   ChangeEvent,
   KeyboardEvent,
   useState,
   useEffect,
   useRef,
   FocusEventHandler,
   FocusEvent,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./stores";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import TodoList from "./components/TodoList";
import { Todo } from "./utils/types";
import { StorageService } from "./services/StorageService";
import { ENTER_KEY, CANCEL_KEY } from "./utils/constanst";
import {
   addTodo,
   clearCompleted,
   deleteTodo,
   toggleAllTodo,
   toggleTodo,
   updateTodo,
} from "./stores/todo";

import "./App.scss";

function App() {
   const todos = useSelector((state: RootState) => state.todos.todos);
   const dispatch = useDispatch();

   const inputRef = useRef<HTMLInputElement | null>();

   const [indexEdit, setIndexEdit] = useState<number | null | undefined>();

   const [filter, setFilter] = useState<string>("all");

   const [value, setValue] = useState<string>("");

   const [todo, setTodo] = useState<Todo>({
      title: "",
      completed: false,
   });

   useEffect(() => {
      StorageService.save(todos);
   }, [todos]);

   console.log(todos);

   const handleChangeValueTodo = (event: { target: HTMLInputElement }) => {
      console.log(event.target.value);
      const newState = { ...todo, title: event.target.value };
      setTodo(newState);
   };

   const add = (event: KeyboardEvent) => {
      if (!todo.title) return;

      if (event.keyCode !== ENTER_KEY) return;

      dispatch(addTodo(todo));
      setTodo({ ...todo, title: "" });
      inputRef.current?.focus();
   };

   const delTodo = (id: number) => {
      dispatch(deleteTodo(id));
   };

   const editTodo = (index: number) => {
      setIndexEdit(index);
   };

   const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (!value) {
         return;
      }

      if (e.type === "blur") {
         dispatch(updateTodo({ index: indexEdit, title: value }));
         setIndexEdit(null);
      }
   };

   const handleEdit = (
      event: { target: HTMLInputElement } | null,
      callback: Function | null
   ) => {
      const value = event.target.value;
      if (typeof callback !== "function") return;

      callback(value);
      setValue(value);
   };

   const toggle = (event: ChangeEvent<HTMLInputElement>, index: number) => {
      dispatch(
         toggleTodo({
            index: index,
         })
      );
   };

   const toggleAll = (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(toggleAllTodo(event.target.checked));
   };

   const update = (event: KeyboardEvent<HTMLInputElement>) => {
      const key = event.keyCode;
      if (indexEdit !== null) {
         if (value) {
            if (key === ENTER_KEY) {
               dispatch(updateTodo({ index: indexEdit, title: value }));
               setIndexEdit(null);
            } else if (key === CANCEL_KEY) {
               setIndexEdit(null);
            }
         } else {
            if (key === ENTER_KEY) {
               dispatch(deleteTodo(indexEdit as number));
            } else if (key === CANCEL_KEY) {
               dispatch(deleteTodo(indexEdit as number));
            }
         }
      }
   };

   const handleFilter = (filter: string) => {
      setFilter(filter);
   };

   const clearComplete = () => {
      dispatch(clearCompleted());
   };

   return (
      <div className="app">
         <Header
            handleChangeValueTodo={handleChangeValueTodo}
            addTodo={add}
            inputRef={inputRef}
            todo={todo.title}
         />
         {todos.length > 0 && (
            <TodoList
               todoList={todos}
               deleteTodo={delTodo}
               editTodo={editTodo}
               indexEdit={indexEdit}
               toggleTodo={toggle}
               toggleAllTodo={toggleAll}
               handleEdit={handleEdit}
               updateTodo={update}
               handleBlur={handleBlur}
               filter={filter}
            />
         )}

         {todos.length > 0 && (
            <Footer
               todoList={todos}
               filter={filter}
               handleFilter={handleFilter}
               clearCompleted={clearComplete}
            />
         )}
      </div>
   );
}

export default App;
