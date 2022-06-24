import { ChangeEvent, useState } from "react";
import "./style.scss";

function TodoItem(props: any) {
   const {
      todo: { title, completed },
      index,
      deleteTodo,
      toggleTodo,
      editTodo,
      indexEdit,
      updateTodo,
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
            onChange={(event) => updateTodo(event, setInputValue)}
            onKeyUp={updateTodo}
            onBlur={updateTodo}
         />
      </li>
   );
}

export default TodoItem;
