/* eslint-disable strict */
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    const node = new _Node(item);

    if (this.head === null) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  dequeue() {
    if (this.head === null) {
      return;
    }

    let node = this.head;
    this.head = this.head.next;
    if (node === this.tail) {
      this.tail = null;
    }
    return node.value;
  }
}

function squareDance(dancers) {
  const spareQ = new Queue();
  for (let i = 0; i < dancers.length - 1; i += 2) {
    let item = dancers[i], nextItem = dancers[i + 1];

    if (item[0] !== nextItem[0]) {  // no match

    } else {  // match

    }

  }
  /* 
    loop through two at a time
      if same genders
        check if have spares
          if same genders as spares
            queue
          if not same genders
            pair them
        if no spares
          queue them
      else if opposite genders
        check if have spares
          check if opp gender
            pair with first in queue
          if same gender
            queue 
        else if don't have spares
          pair them up
      */
}

/* 
At the Ophidian Bank, a single teller serves a 
long queue of people. New customers join the end of the 
queue, and the teller will serve a customer only if they 
have all of the appropriate paperwork. Write a representation 
of this queue; 25% of the time (random), a customer's paperwork 
isn't quite right, and it's back to the end of the queue. 
Show what a few minutes of the bank's lobby would look like.
 */

function bank(customers, time) {
  const custQ = new Queue();
  

}

function main() {
  const starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  //starTrekQ.dequeue();
  //starTrekQ.dequeue();
  display(starTrekQ);

  const dancers = [
    'F Jane',
    'M Frank',
    'M John',
    'M Sherlock',
    'F Madonna',
    'M David',
    'M Christopher',
    'F Beyonce'];

  squareDance(dancers);

  const customers = [
    'customer1',
    'customer2',
    'customer3',
    'customer4',
    'customer5',
    /* 'customer6',
    'customer7',
    'customer8',
    'customer9',
    'customer10',
    'customer11' */
  ]

}
main();

function peek(queue) {
  return queue.head;
}

function isEmpty(queue) {
  if (queue.head === null) {
    // console.log('Queue is empty');
    return true;
  } else {
    // console.log('Queue has data');
    return false;
  }
}

function display(queue) {
  let node = queue.head;

  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
}
