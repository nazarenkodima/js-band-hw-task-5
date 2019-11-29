export class LocalStorage {
    constructor () {
        this.storage = {};

        this.localStoragePrefix = 'JS-Band-';
    }


    getItem = jest.fn((key) => {
        return this.storage[key] || null;
    });

    setItem = jest.fn((key, value) => {
        this.storage[key] = JSON.stringify(value);
    });

}
