
export const storageSetItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))

}
export const storageGetItem = (key) => {
    const item = localStorage.getItem(key);
    console.log(item)
    if (item) {
        return JSON.parse(item);
    } else {
        return null;
    }
}

export const storageRemoveItem = (key) => {
    localStorage.removeItem(key);
}
export const getCurrentLangue = () => {
    return localStorage.getItem('i18nextLng');

}
