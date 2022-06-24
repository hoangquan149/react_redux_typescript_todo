import { Todo, Actions } from "./types";

export const ENTER_KEY: number = 13;
export const CANCEL_KEY: number = 27;

export const FILTERS: any = {
   all: () => true,
   active: (todo: Todo) => !todo.completed,
   completed: (todo: Todo) => todo.completed,
};
