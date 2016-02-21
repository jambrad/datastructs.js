class LinkedList {
    constructor() {
        Object.defineProperty(this, '_head', { value: null, writable: true });
        Object.defineProperty(this, '_tail', { value: null, writable: true });
    }


    add(item) {
        throw new Error('LinkedList: method "add" not yet implemented.');
    }


    remove(item) {
        throw new Error('LinkedList: method "remove" not yet implemented.');
    }


    clear() {
        throw new Error('LinkedList: method "clear" not yet implemented.');
    }


    contains(item) {
        throw new Error('LinkedList: method "contains" not yet implemented.');
    }


    count() {
        throw new Error('LinkedList: method "count" not yet implemented.');
    }
}


module.exports = LinkedList;
