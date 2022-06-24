import React, {
   ChangeEvent,
   KeyboardEvent,
   useState,
   useEffect,
   useRef,
} from "react";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import TodoList from "./components/TodoList";
import { Todo } from "./utils/types";
import { ENTER_KEY, CANCEL_KEY } from "./utils/constanst";
import "./App.scss";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
   const { save, get } = useLocalStorage();

   const [todo, setTodo] = useState<Todo>({
      title: "",
      completed: false,
   });

   const [todoList, setTodoList] = useState<Array<Todo>>(() => get() || []);

   const inputRef = useRef<HTMLInputElement | null>();

   const [indexEdit, setIndexEdit] = useState<any>();

   const [filter, setFilter] = useState<any>("all");

   useEffect(() => {
      save(todoList);
   }, [todoList]);

   const handleTodo = (event: { target: HTMLInputElement }): void => {
      const value = event.target.value;
      const newState = { ...todo, title: value };
      setTodo(newState);
   };

   const addTodo = (event: KeyboardEvent): void => {
      const newState = [...todoList];

      if (!todo.title) {
         return;
      }

      if (event.keyCode === ENTER_KEY) {
         newState.unshift(todo);
         setTodoList(newState);
         setTodo({ ...todo, title: "" });
         inputRef.current?.focus();
      }
   };

   const deleteTodo = (index: number): void => {
      const newState = [...todoList];
      newState.splice(index, 1);
      setTodoList(newState);
   };

   const toggleTodo = (
      event: ChangeEvent<HTMLInputElement>,
      index: number
   ): void => {
      const newState = [...todoList];
      const todo = newState[index];
      console.log(todo);
      todo.completed = event.target.checked;
      setTodoList(newState);
   };

   const toggleAllTodo = (event: ChangeEvent<HTMLInputElement>): void => {
      const newState = [...todoList].map((todo, index) => {
         return { ...todo, completed: !event.target.checked };
      });
      setTodoList(newState);
   };

   const editTodo = (index: number) => {
      setIndexEdit(index);
   };

   const clearCompleted = (): void => {
      const newState = [...todoList].filter((todo) => !todo.completed);
      setTodoList(newState);
   };

   const updateTodo = (
      event: KeyboardEvent<HTMLInputElement>,
      callback: any
   ): void => {
      const value = event.currentTarget.value;

      const newState = [...todoList];

      const todo = newState[indexEdit];

      if (indexEdit !== null) {
         if (value) {
            if (event.keyCode === ENTER_KEY) {
               todo.title = value;
               setTodoList(newState);
               setIndexEdit(null);
            } else if (event.keyCode === CANCEL_KEY) {
               setIndexEdit(null);
            }

            if (event.type === "blur") {
               todo.title = value;
               setTodoList(newState);
               setIndexEdit(null);
            }
         } else {
            if (event.keyCode === ENTER_KEY) {
               deleteTodo(indexEdit);
               setIndexEdit(null);
            } else if (event.keyCode === CANCEL_KEY) {
               deleteTodo(indexEdit);
               setIndexEdit(null);
            }
         }
      }

      if (typeof callback === "function") {
         callback(value);
      }
   };

   const handleFilter = (filter: string) => {
      setFilter(filter);
   };

   return (
      <div className="app">
         <Header
            handleTodo={handleTodo}
            addTodo={addTodo}
            todo={todo.title}
            inputRef={inputRef}
         />
         {todoList.length > 0 && (
            <TodoList
               todoList={todoList}
               deleteTodo={deleteTodo}
               toggleTodo={toggleTodo}
               toggleAllTodo={toggleAllTodo}
               editTodo={editTodo}
               indexEdit={indexEdit}
               updateTodo={updateTodo}
               filter={filter}
            />
         )}

         {todoList.length > 0 && (
            <Footer
               filter={filter}
               handleFilter={handleFilter}
               clearCompleted={clearCompleted}
               todoList={todoList}
            />
         )}
      </div>
   );
}

export default App;
