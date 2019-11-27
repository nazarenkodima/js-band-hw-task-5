export default class LocalStorageService {
  static getInstance() {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }

    return LocalStorageService.instance;
  }

  constructor() {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = this;
    }

    this.localStoragePrefix = 'JS-Band-';

    return LocalStorageService.instance;
  }

  init(key) {
    if (localStorage.getItem(`${this.localStoragePrefix}${key}`) === null) {
      return true;
    }
    return false;
  }

  getToken(key) {
    let localStorageKey;

    if (localStorage.getItem(`${this.localStoragePrefix}${key}`) !== null) {
      localStorageKey = localStorage.getItem(`${this.localStoragePrefix}${key}`);
      localStorageKey = JSON.parse(localStorageKey);


    }
    return localStorageKey;
  }

  saveToken(key, value) {
    const storageValue = JSON.stringify(value);

    localStorage.setItem(`${this.localStoragePrefix}${key}`, storageValue);
  }
}
