import { LocalStorageService } from "services/local-storage.service";
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  LocalStorageService.saveData("todoData", store.getState());
  return result;
};

export default localStorageMiddleware;
