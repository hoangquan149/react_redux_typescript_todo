import { ChangeEvent, KeyboardEvent } from "react";

export interface Todo {
   title: string;
   completed: boolean;
}

export interface Actions {
   all(): boolean;
   active(todo: Todo): boolean;
   completed(todo: Todo): boolean;
}

export interface PropsTodo {
   todo?: Todo;
   index?: number;
   todoList: Array<Todo>;
   deleteTodo: (index: number) => void;
   toggleTodo: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
   toggleAllTodo: (event: ChangeEvent<HTMLInputElement>) => void;
   editTodo: (index: number) => void;
   indexEdit: number | null | undefined;
   updateTodo: (event: KeyboardEvent<HTMLInputElement>, callback: any) => void;
   filter: string;
}
