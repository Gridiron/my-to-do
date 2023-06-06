import { LocalStorageService } from '../local-storage.service';

describe('LocalStorageService', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('should save data to local storage', () => {
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
    setItemMock.mockImplementation(() => {});
    const key = 'myKey';
    const data = { name: 'John', age: 30 };

    LocalStorageService.saveData(key, data);

    expect(setItemMock).toHaveBeenCalledWith(key, JSON.stringify(data));

    setItemMock.mockRestore();
  });

  test('should retrieve data from local storage', () => {
    const key = 'myKey';
    const data = { name: 'John', age: 30 };
    localStorage.setItem(key, JSON.stringify(data));

    const retrievedData = LocalStorageService.getData(key);

    expect(retrievedData).toEqual(JSON.stringify(data));
  });
});
