import assert from 'assert';
import LinkedList from '../linked-list';
import LinkedListNode from '../linked-list-node';


describe('LinkedList', () => {
    beforeEach(function() {
        this.list = new LinkedList();
        this.list.add(1);
        this.list.add('string');
        this.list.add([1, 2, 3]);
    });

    it('should be iterable', function() {
        let actual = [...this.list];
        let expected = [1, 'string', [1, 2, 3]];
        assert.deepEqual(actual, expected);
    });

    it('should be iterable with a for..of loop', function() {
        let actual = [];
        let expected = [1, 'string', [1, 2, 3]];
        for (let item of this.list) {
            actual.push(item);
        }
        assert.deepEqual(actual, expected);
    });

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
        });
    });

    describe('.remove(item)', () => {
        beforeEach(function() {
            this.list = new LinkedList();
            this.one = this.list.add(1);
            this.two = this.list.add('string');
            this.three = this.list.add([1, 2, 3]);
        });

        it('should update head if removed item is current head', function() {
            this.list.remove(1);
            assert.equal(this.list._head, this.two);

            this.list.remove('string');
            assert.equal(this.list._head, this.three);

            this.list.remove([1, 2, 3]);
            assert.equal(this.list._head, null);
        });

        it('should update tail if removed item is current tail', function() {
            this.list.remove([1, 2, 3]);
            assert.equal(this.list._tail, this.two);

            this.list.remove('string');
            assert.equal(this.list._tail, this.one);

            this.list.remove(1);
            assert.equal(this.list._tail, null);
        });

        it('should update the next property of the previous node', function() {
            this.list.remove('string');
            assert.equal(this.one.next, this.three);

            this.list.remove([1, 2, 3]);
            assert.equal(this.one.next, null);
        });

        it('should return true if removal succeeded', function() {
            assert.equal(this.list.remove(1), true);
            assert.equal(this.list.remove('string'), true);
            assert.equal(this.list.remove([1, 2, 3]), true);
        });

        it('should return false if removal failed', function() {
            assert.equal(this.list.remove(4), false);
            assert.equal(this.list.remove(5), false);
        });

        it('should set removed node\'s next to null', function() {
            this.list.remove(1);
            assert.equal(this.one.next, null);
        });

        it('should decrement list length', function() {
            this.list.remove(1);
            assert.equal(this.list.length, 2);
        });
    });

    describe('.clear()', () => {
        beforeEach(function() {
            this.list = new LinkedList();
            this.list.add(1);
            this.list.add('string');
            this.list.add([1, 2, 3]);
        });

        it('should set head and tail to null', function() {
            this.list.clear();
            assert.equal(this.list._head, null);
            assert.equal(this.list._tail, null);
        });

        it('should reset the length of the list', function() {
            this.list.clear();
            assert.equal(this.list.length, 0);
        });
    });

    describe('.contains(item)', () => {
        beforeEach(function() {
            this.list = new LinkedList();
            this.list.add(1);
            this.list.add('string');
            this.list.add([1, 2, 3]);
        });

        it('should return true if item is in the list', function() {
            assert.equal(this.list.contains(1), true);
            assert.equal(this.list.contains('string'), true);
            assert.equal(this.list.contains([1, 2, 3]), true);
        });

        it('should return false if item is not in the list', function() {
            assert.equal(this.list.contains(2), false);
            assert.equal(this.list.contains('lorem'), false);
            assert.equal(this.list.contains([4, 5, 6]), false);
        });
    });
});
