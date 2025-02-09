const mockStore = new Map();

export const store = {
    add: (key, data) => {
        if (sessionStorage) {
            sessionStorage.setItem(key, data);
        } else {
            mockStore.set(key, data);
        }
    },
    get: (key) => {
        if (sessionStorage) {
            return sessionStorage.getItem(key);
        } else {
            return mockStore.get(key);
        }
    }
}