import LinkedListNode from './linked-list-node';


class LinkedList {
    constructor() {
        Object.defineProperty(this, '_head', { value: null, writable: true });
        Object.defineProperty(this, '_tail', { value: null, writable: true });
        this.length = 0;
    }


    add(item) {
        let node = new LinkedListNode(item);
        if (this._tail === null) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return node;
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
}


module.exports = LinkedList;
