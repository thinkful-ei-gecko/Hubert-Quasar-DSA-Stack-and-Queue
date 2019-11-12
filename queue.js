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

function squareDance(queue) {
  const spareMen = new Queue();
  const spareWomen = new Queue();

  const pairs = new Queue();

  let personA, personB;
  while ((personA = queue.dequeue())) {
    if (personA.gender === 'male') {
      if ((personB = spareWomen.dequeue())) {
        pairs.enqueue([personA, personB]);
      } else {
        spareMen.enqueue(personA);
      }
    } else if (personA.gender === 'female') {
      if ((personB = spareMen.dequeue())) {
        pairs.enqueue([personA, personB]);
      } else {
        spareWomen.enqueue(personA);
      }
    }
  }
  return pairs;
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

function bank() {
  const queue = new Queue();
  // Assumption: New people join the queue at the same rate they are seen

  for (var i = 0; i < 100; i++) {
    console.log('Person joined line');
    queue.enqueue({
      angriness: 0 // How fed up the person is with doing their paperwork
    });

    const person = queue.dequeue();
    if (Math.random() < 0.25) {
      console.log(`Person with angriness ${person.angriness} sent to the back`);
      person.angriness++;
      queue.enqueue(person);
    } else {
      console.log(`Person with angriness ${person.angriness} processed`);
    }
  }
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

  /*  const dancers = [
    'F Jane',
    'M Frank',
    'M John',
    'M Sherlock',
    'F Madonna',
    'M David',
    'M Christopher',
    'F Beyonce'
  ];
 */

  bank();

  const queue = new Queue();
  queue.enqueue({
    name: 'Gwendolyn Wilderman',
    gender: 'female'
  });
  queue.enqueue({
    name: 'Wilbur Brakus',
    gender: 'male'
  });
  queue.enqueue({
    name: 'Vallie Howell',
    gender: 'female'
  });
  queue.enqueue({
    name: 'Nova Doyle',
    gender: 'female'
  });
  queue.enqueue({
    name: 'Monica Turcotte',
    gender: 'female'
  });
  queue.enqueue({
    name: 'Corine Smith',
    gender: 'female'
  });
  queue.enqueue({
    name: 'Jamir Sporer',
    gender: 'male'
  });

  console.log(JSON.stringify(squareDance(queue)));

  const customers = [
    'customer1',
    'customer2',
    'customer3',
    'customer4',
    'customer5'
    /* 'customer6',
    'customer7',
    'customer8',
    'customer9',
    'customer10',
    'customer11' */
  ];
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
