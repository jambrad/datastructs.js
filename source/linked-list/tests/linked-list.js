import assert from 'assert';
import LinkedList from '../linked-list';
import LinkedListNode from '../linked-list-node';


describe('LinkedList', () => {
    describe('.add(item)', () => {
        let list = null;

        beforeEach(() => list = new LinkedList());

        it('should set head to first item', () => {
            list.add(1);
            assert.equal(list._head.value, 1);
        });

        it('should point tail to the latest item', () => {
            list.add(1);
            assert.equal(list._tail.value, 1);

            list.add(2);
            assert.equal(list._tail.value, 2);
        });

        it('should initialize LinkedListNode for added item', () => {
            list.add(1);
            assert.ok(list._head instanceof LinkedListNode);
        });

        it('should increment list length', () => {
            list.add(1);
            assert.equal(list.length, 1);

            list.add(2);
            assert.equal(list.length, 2);
        });
    });
});
