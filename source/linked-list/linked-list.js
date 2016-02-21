import deepequal from 'deepequal';
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
        if (this._head) {
            let node = this._head;
            let prev = null;
            while (!deepequal(node.value, item)) {
                prev = node;
                node = node.next;
                if (node === null) {
                    return false;
                }
            }
            if (this._head === node) {
                this._head = node.next;
            } else {
                prev.next = node.next;
            }
            if (this._tail === node) {
                this._tail = prev;
            }
            node.next = null;
            this.length--;
            return true;
        }
        return false;
    }


    clear() {
        throw new Error('LinkedList: method "clear" not yet implemented.');
    }


    contains(item) {
        throw new Error('LinkedList: method "contains" not yet implemented.');
    }
}


module.exports = LinkedList;
