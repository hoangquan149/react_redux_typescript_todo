import React, { FC, ChangeEvent, KeyboardEvent, useState } from "react";
import { PropsTodo, Todo } from "../../utils/types";
import "./style.scss";

export default function TodoItem(props: PropsTodo) {
   const {
      todo: { title, completed },
      index,
      deleteTodo,
      toggleTodo,
      editTodo,
      indexEdit,
      updateTodo,
      handleEdit,
      handleBlur,
   } = props;

   const [inputValue, setInputValue] = useState<string>(title);

   return (
      <li
         className={`${completed && "completed"} ${
            indexEdit === index && "editing"
         } `}
      >
         <div className="view">
            <input
               type="checkbox"
               className="toggle"
               checked={completed}
               onChange={(event) => toggleTodo(event, index)}
            />
            <label onDoubleClick={() => editTodo(index)}>{title}</label>
            <button
               className="destroy"
               onClick={() => deleteTodo(index)}
            ></button>
         </div>
         <input
            className="edit"
            value={inputValue}
            onChange={(event) => handleEdit(event, setInputValue)}
            onKeyUp={updateTodo}
            onBlur={handleBlur}
         />
      </li>
   );
}
