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
      handleEdit,
      handleBlur,
      filter,
   } = props;
   return (
      <div className="main">
         <input
            type={"checkbox"}
            id="toggle-all"
            className="toggle-all"
            onChange={(event) => toggleAllTodo(event)}
         />
         <label htmlFor="toggle-all"></label>
         <ul className="todo-list">
            {todoList.filter(FILTERS[filter]).map((todo, index) => (
               <TodoItem
                  key={index}
                  index={index}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  indexEdit={indexEdit}
                  editTodo={editTodo}
                  handleEdit={handleEdit}
                  updateTodo={updateTodo}
                  handleBlur={handleBlur}
               />
            ))}
         </ul>
      </div>
   );
}

export default TodoList;
