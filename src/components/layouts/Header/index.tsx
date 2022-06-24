import React, { ChangeEvent, KeyboardEvent } from "react";
import "./style.scss";

interface Props {
   handleTodo?: (event: { target: HTMLInputElement }) => void;
   addTodo: (event: KeyboardEvent) => void;
   inputRef: any;
   todo: string;
}

function Header(props: Props) {
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
