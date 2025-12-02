class Stack {
    constructor() {
        this.items = [];
    }

    // Push element to stack
    push(element) {
        this.items.push(element);
        console.log(`${element} pushed to stack.`);
    }

    // Pop element from stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow! Nothing to pop.");
            return null;
        }
        return this.items.pop();
    }

    // Peek top element
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get size of stack
    size() {
        return this.items.length;
    }
}

// ------------ Testing ------------
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element is:", stack.peek());
console.log("Popped:", stack.pop());
console.log("Popped:", stack.pop());
console.log("Is stack empty?", stack.isEmpty());
console.log("Size:", stack.size());
