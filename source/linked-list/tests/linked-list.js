import assert from 'assert';
import LinkedList from '../linked-list';
import LinkedListNode from '../linked-list-node';


describe('LinkedList', () => {
    describe('.add(item)', () => {
        beforeEach(function() {
            this.list = new LinkedList();
        });

        it('should set head to first item', function() {
            this.list.add(1);
            assert.equal(this.list._head.value, 1);
        });

        it('should point tail to the latest item', function() {
            this.list.add(1);
            assert.equal(this.list._tail.value, 1);

            this.list.add(2);
            assert.equal(this.list._tail.value, 2);
        });

        it('should initialize LinkedListNode for added item', function() {
            this.list.add(1);
            assert.ok(this.list._head instanceof LinkedListNode);
        });

        it('should increment list length', function() {
            this.list.add(1);
            assert.equal(this.list.length, 1);

            this.list.add(2);
            assert.equal(this.list.length, 2);
        });
    });
});
