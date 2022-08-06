import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

export interface Todo {
   title: string;
   completed: boolean;
}

export interface PropsTodo {
   todo?: Todo;
   index?: number;
   todoList?: Array<Todo>;
   deleteTodo?: (index: number) => void;
   toggleTodo?: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
   toggleAllTodo?: (event: ChangeEvent<HTMLInputElement>) => void;
   editTodo?: (index: number) => void;
   indexEdit?: number | null | undefined;
   updateTodo?: (event: KeyboardEvent<HTMLInputElement>) => void;
   handleEdit?: (
      event: { target: HTMLInputElement },
      callback: Function
   ) => void;
   handleBlur?: (e: FocusEvent<HTMLInputElement>) => void;
   filter?: string;
}

export interface PropsHeader {
   handleChangeValueTodo?: (event: { target: HTMLInputElement }) => void;
   addTodo: (event: KeyboardEvent) => void;
   inputRef: any;
   todo?: string;
}

export interface PropsFooter {
   filter?: string;
   handleFilter?: (filter: string) => void;
   clearCompleted?: () => void;
   todoList?: Array<Todo>;
}
