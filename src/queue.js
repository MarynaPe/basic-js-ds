const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.elem = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.elem
  }

  enqueue(value) {
    if (this.length == 0) {
      this.elem = new ListNode(value)
    } else {
      let temp = this.elem;
      while (temp.next) {
        temp = temp.next
      }
      temp.next = new ListNode(value)
    }
    this.length++;
  }

  dequeue() {
    let elemTemp = this.elem.value
    this.elem = this.elem.next
    return elemTemp;
  }
}


module.exports = {
  Queue
};
