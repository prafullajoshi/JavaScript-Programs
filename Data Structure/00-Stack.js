/**
 * IMPLEMENTATION OF STACK USING ARRAY
 */

 class Stack {
     
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }

    // Functions to be implemented

    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()
    push = (element) => {
        // push element into the stack(items)
        this.items.push(element);
     }

    pop = () => {
        // removes and returns the top most elements from the stack
        // returns "underflow" if stack is empty
        if (this.items.length === 0) {
            return `Underflow`;
        }
        return this.items.pop();
    }

    peek = () => {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1]
        }
    }
    
    isEmpty = () => {
        return this.items.length === 0;
    }

    getSize = () => {
        return this.items.length;
    }

    printStack = () => {
        let str = ``;
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ` `;
        }
        return str;
    }
 }

const main = () => {
    let stack_size = 5;
    let stack = new Stack();

    // pushing elements onto the stack
    for (let i = 1; i <= stack_size; i++) {
        stack.push(i*10);
    }

    console.log(`Elements pushed onto Stack.`);
    console.log(`Size of Stack :${stack.getSize()}`);       // 5
    console.log(`Top of Stack :${stack.peek()}`);           // 50

    // printing the stack
    console.log(`Printing the stack...`);
    console.log(`[ ${stack.printStack()} ]`);             // [10, 20, 30, 40, 50]

    // popping element from the stack
    // checking isEmpty condition
    if (!stack.isEmpty()) {
        let element = stack.pop();
        console.log(`Popped element is ${element}`);        // 50
    } else {
        console.log(`Stack is empty !!`);
    }

    console.log(`Size of Stack :${stack.getSize()}`);       // 4
    console.log(`Top of Stack :${stack.peek()}`);           // 40

    // printing the stack
    console.log(`Printing the stack...`);
    console.log(`[ ${stack.printStack()} ]`);               // [10, 20, 30, 40]
}

// calling main function
main();
// main.call();



// Shubham Vadangekar 
