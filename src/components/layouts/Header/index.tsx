import React, { ChangeEvent, KeyboardEvent } from "react";
import { PropsHeader } from "../../../utils/types";
import "./style.scss";

function Header(props: PropsHeader) {
   const { handleTodo, addTodo, inputRef, todo, ...other } = props;
   return (
      <header className="header">
         <h1>todos</h1>
         <input
            ref={inputRef}
            placeholder="Mời bạn nhập..."
            onChange={handleTodo}
            onKeyUp={addTodo}
            value={todo}
            {...other}
         />
      </header>
   );
}

export default Header;
