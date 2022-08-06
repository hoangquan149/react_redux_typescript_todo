import React, { ChangeEvent, KeyboardEvent } from "react";
import { PropsHeader } from "../../../utils/types";
import "./style.scss";

function Header(props: PropsHeader) {
   const { handleChangeValueTodo, addTodo, inputRef, todo, ...other } = props;
   return (
      <header className="header">
         <h1>todos</h1>
         <input
            ref={inputRef}
            placeholder="Mời bạn nhập..."
            value={todo}
            onChange={handleChangeValueTodo}
            onKeyUp={addTodo}
         />
      </header>
   );
}

export default Header;
