export class LocalStorageService {
  static saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static getData(key) {
    return localStorage.getItem(key);
  }
}
