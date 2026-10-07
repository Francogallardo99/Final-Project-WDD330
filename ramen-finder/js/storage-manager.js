export function saveShoppingList(list) {
    const storageList = JSON.stringify(list);
    localStorage.setItem("ingredients", storageList);
}
export function getShoppingList() {
    const storageList = localStorage.getItem("ingredients");
    return storageList ? JSON.parse(storageList) : [];
}