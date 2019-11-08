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
    if(this.top === null) {
      this.top = new _Node(item, this.top)
      return this.top;
    }
      this.top = new _Node(item, this.top)
  }

  pop() {
    // if(this.top === null) {
    //   return null;
    // }
    const node = this.top
    this.top = node.next;
    return node.value;
  }
}

function main() {
  const starTrek = new Stack();

  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')

  starTrek.pop()

  //console.log(JSON.stringify(starTrek))
  //console.log(peek(starTrek));
  //isEmpty(starTrek);
  display(starTrek)
  is_palindrome(starTrek)
}
main();

function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  if(!stack.top) {
    console.log('Stack is empty')
  } else {
    console.log('Stack has data')
  }
};

function display(stack) {
  let node = stack.top

  while(node !== null) {
    console.log(node.value);
    node = node.next;
  }
};

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  const forwardStack = new Stack();
  const backwardStack = new Stack();

  for(i=0; i<s.length; i++) {
    forwardStack.push(s[i])
  }

  for(i= s.length - 1; i>=0; i--) {
    backwardStack.push(s[i])
  }

  while(forwardStack.top !== null && backwardStack !== null) {
    if(forwardStack.top.value === backwardStack.top.value) {
      return true;
    } else {
      return false;
    }
  }
}

// True, true, true, false
  console.log(is_palindrome("dad"));
  console.log(is_palindrome("A man, a plan, a canal: Panama"));
  console.log(is_palindrome("1001"));
  console.log(is_palindrome("Tauhida"));