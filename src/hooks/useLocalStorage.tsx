import { Todo } from "../utils/types";
const KEY = "todos";
function useLocalStorage() {
   const save = (data: any, key?: string) => {
      if (localStorage) {
         if (data) {
            const dataJson = JSON.stringify(data);
            if (key) {
               localStorage.setItem(key, dataJson);
            } else {
               localStorage.setItem(KEY, dataJson);
            }
         }
      }
   };

   const get = (key: string = KEY) => {
      const dataJson = localStorage?.getItem(key);
      return dataJson !== null ? JSON.parse(dataJson) : [];
   };

   return { save, get };
}

export default useLocalStorage;
