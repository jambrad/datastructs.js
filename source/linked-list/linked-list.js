import 'babel-polyfill';
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
        let node = this._head;
        let prev = null;
        while (node !== null) {
            if (deepequal(node.value, item)) {
                if (prev === null) {
                    this._head = this._head.next;
                    if (this._head === null) {
                        this._tail = null;
                    }
                } else {
                    prev.next = node.next;
                    if (node.next === null) {
                        this._tail = prev;
                    }
                }
                node.next = null;
                this.length--;
                return true;
            }
            prev = node;
            node = node.next;
        }
        return false;
    }


    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }


    contains(item) {
        let node = this._head;
        while (node !== null) {
            if (deepequal(node.value, item)) {
                return true;
            }
            node = node.next;
        }
        return false;
    }


    [Symbol.iterator]() {
        let node = this._head;
        return {
            next: () => {
                let object = { done: node === null };
                if (!object.done) {
                    object.value = node ? node.value : undefined;
                }
                node = node ? node.next : null;
                return object;
            }
        };
    }
}


module.exports = LinkedList;
