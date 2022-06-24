export interface Todo {
   title: string;
   completed: boolean;
}

export interface Actions {
   all(): boolean;
   active(todo: Todo): boolean;
   completed(todo: Todo): boolean;
}
