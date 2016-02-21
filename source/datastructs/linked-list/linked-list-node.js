class LinkedListNode {
    constructor(value) {
        this.value = value;
        Object.defineProperty(this, '_next', { value: null, writable: true });
    }


    get next() {
        return this._next;
    }


    set next(next) {
        if (!(next instanceof LinkedListNode) && next !== null) {
            throw new Error('LinkedListNode: property "next" can only be of '
                + 'type LinkedListNode or null.');
        }
        this._next = next;
    }
}


module.exports = LinkedListNode;
