import LocalStorageService from './LocalStorageService';

describe('Localstorage:', () => {
  test('should be singleton', () => {
    const insatance1 = new LocalStorageService();
    const insatance2 = new LocalStorageService();

    expect(insatance1 === insatance2).toBeTruthy();
  });

  test('should save to local storage with key value', () => {
    __.localStorageMock.saveToken(__.prefix, 'value');

    expect(__.localStorageMock.saveToken).toBeCalledWith(__.prefix, 'value');
  });

  test('should get value from  storage', () => {
    __.localStorageMock.getToken(__.prefix);

    expect(__.localStorageMock.getToken).toBeCalledWith(__.prefix);
    expect(__.localStorageMock.getToken).not.toBe(null);
    expect(__.localStorageMock.getToken.mockReturnValue(__.prefix));
  });
});
