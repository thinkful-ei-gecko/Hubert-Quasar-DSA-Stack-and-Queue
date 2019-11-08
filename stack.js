/* eslint-disable strict */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    if (this.top === null) {
      this.top = new _Node(item, this.top);
      return this.top;
    }
    this.top = new _Node(item, this.top);
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}


function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  if (!stack.top) {
    console.log('Stack is empty');
  } else {
    console.log('Stack has data');
  }
}

function display(stack) {
  let node = stack.top;

  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const forwardStack = new Stack();
  const backwardStack = new Stack();

  for (let i = 0; i < s.length / 2; i++) {
    forwardStack.push(s[i]);
    backwardStack.push(s[s.length - 1 - i]);
  }

  let forwardTNode = forwardStack.top;
  let backwardTNode = backwardStack.top;

  while (forwardTNode != null && backwardTNode != null) {
    if (forwardTNode.value != backwardTNode.value) return false;
    forwardTNode = forwardTNode.next;
    backwardTNode = backwardTNode.next;
  }
  return true;
}

function matchParenthesis(string) {
  let stringStack = new Stack();
  let parens = 0;

  for (let i = 0; i < string.length; i++) {
    stringStack.push(string[i]);
  }
  while (stringStack.top != null) {
    let poppedChar = stringStack.pop();
    if (poppedChar === '(') parens++;
    if (poppedChar === ')') parens--;
  }

  if (parens > 0) {
    return 'you are missing one or more \')\'';
  } else if (parens < 0) {
    return 'you are missing one or more \'(\'';
  } else {
    return 'your expression is fine';
  }
}

function sortA(stack) {
  //let stackA = new Stack();
  let stackB = new Stack();

  while (stack.top !== null) {
    let temp = stack.pop();
    while (stackB.top !== null && temp > stackB.top.value) {
      stack.push(stackB.pop())
    }
    stackB.push(temp);
  }

  // while(stackB !== null) {
  //   stack.push(stackB.pop())
  // }
  return stackB;
}

class QueueStack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(item) {
    this.stackA.push(item)

    if (this.head === null) {
      this.head = this.stackA.top;
    }
    this.tail = this.stackA.top;
  }

  dequeue() {
    if (this.head === null) {
      return;
    }

    let prevHead = this.head;
    let node = this.stackA.top;
    while (node.next != null) {
      let poppedVal = this.stackA.pop();
      this.stackB.push(poppedVal);
      node = node.next;
    }

    this.stackA.pop();
    this.head = this.stackB.top;

    node = this.stackB.top;
    while (node != null) {
      this.stackA.push(this.stackB.pop());
      node = node.next;
    }

    return prevHead.value;
  }
}

function displayQueue(queue) {
  display(queue.stackA);
}

function main() {
  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  // starTrek.pop();

  //console.log(JSON.stringify(starTrek))
  //console.log(peek(starTrek));
  //isEmpty(starTrek);
  //display(starTrek);

  // True, true, true, false
  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome("A man, a plan, a canal: Panama"));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("134201"));
  // console.log(is_palindrome("Tauhida"));

  // console.log(matchParenthesis('1 + (2 * 3 * (4 * 5))'));
  // console.log(matchParenthesis('1 + (2 * 3 * (4 * 5)'));
  // console.log(matchParenthesis('1 + (2 * 3 * (4 * 5)))))'));

  let numStack = new Stack();
  numStack.push(1);
  numStack.push(5);
  numStack.push(2);
  numStack.push(6);
  numStack.push(6);
  numStack.push(3);
  numStack.push(23);
  numStack.push(4);

  //sort(starTrek);

  // numStack = sortA(numStack);
  // display(numStack);

  const starTrekQ = new QueueStack();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  starTrekQ.dequeue();
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  starTrekQ.dequeue();

  starTrekQ.enqueue('3');
  starTrekQ.enqueue('4');
  starTrekQ.enqueue('5');

  displayQueue(starTrekQ);
}
main();

