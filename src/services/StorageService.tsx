const KEY = "todos";

const StorageService = {
   save(data: any, key?: string) {
      if (localStorage) {
         if (data) {
            const dataJson = JSON.stringify(data);
            if (key) {
               localStorage.setItem(key, dataJson);
            } else {
               localStorage.setItem(KEY, dataJson);
            }
         } else {
            localStorage.removeItem(KEY);
         }
      }
   },
   get(key: string = KEY) {
      const dataJson = localStorage?.getItem(key);
      return dataJson !== null ? JSON.parse(dataJson) : [];
   },
};

export { StorageService };
