import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { FILTERS } from "../../utils/constanst";
import { Todo, PropsTodo } from "../../utils/types";
import TodoItem from "../TodoItem";

import "./style.scss";

function TodoList(props: PropsTodo) {
   const {
      todoList,
      deleteTodo,
      toggleTodo,
      toggleAllTodo,
      editTodo,
      indexEdit,
      updateTodo,
      filter,
   } = props;
   return (
      <div className="main">
         <input
            type={"checkbox"}
            id="toggle-all"
            onChange={toggleAllTodo}
            className="toggle-all"
         />
         <label htmlFor="toggle-all"></label>
         <ul className="todo-list">
            {todoList
               .filter(FILTERS[filter])
               .map((todo: Todo, index: number) => (
                  <TodoItem
                     key={index}
                     todo={todo}
                     index={index}
                     deleteTodo={deleteTodo}
                     toggleTodo={toggleTodo}
                     editTodo={editTodo}
                     indexEdit={indexEdit}
                     updateTodo={updateTodo}
                  />
               ))}
         </ul>
      </div>
   );
}

export default TodoList;
