import assert from 'assert';
import LinkedListNode from '../linked-list-node';


describe('LinkedListNode', () => {
    describe('should accept any type of value', () => {
        it('accepts numbers', () => {
            let value = 12;
            let node = new LinkedListNode(value);
            assert.equal(node.value, value);
        });

        it('accepts strings', () => {
            let value = 'string';
            let node = new LinkedListNode(value);
            assert.equal(node.value, value);
        });

        it('accepts arrays', () => {
            let value = [1, 2, 3];
            let node = new LinkedListNode(value);
            assert.deepEqual(node.value, value);
        });

        it('accepts objects', () => {
            let value = { a: 1, b: 2, c: 3 };
            let node = new LinkedListNode(value);
            assert.deepEqual(node.value, value);
        });

        it('accepts null', () => {
            let node = new LinkedListNode(null);
            assert.equal(node.value, null);
        });

        it('accepts undefined', () => {
            let node = new LinkedListNode(undefined);
            assert.equal(node.value, undefined);
        });
    });

    it('should accept LinkedListNode as value for next', () => {
        let node = new LinkedListNode(1);
        let next = new LinkedListNode(2);
        node.next = next;
        assert.deepEqual(node.next, next);
    });

    it('should accept null as value for next', () => {
        let node = new LinkedListNode(1);
        node.next = null;
        assert.equal(node.next, null);
    });

    it('should throw an error for any other value for next', () => {
        let node = new LinkedListNode(1);
        assert.throws(() => node.next = 12, Error, 'LinkedListNode: property '
            + '"next" can only be of type LinkedListNode or null.');
    });
});
