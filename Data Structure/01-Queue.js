class Queue {
    // Array is used to implement queue
    constructor() {
        this.items = [];
    }

    // Functions to be implemented
    enqueue = (element) => {
        this.items.push(element);
    }

    dequeue = () => {
        if (this.isEmpty) {
            return `Underflow`;
        }
        return this.items.shift();      // will remove first element from queue
    }

    front = () => {
        if (this.isEmpty()) {
            return `No element in Queue !`;
        }
        return this.items[0];
    }

    isEmpty = () => {
        return this.items.length === 0;
    }

    getSize = () => {
        return this.items.length;
    }

    printQueue = () => {
        let str = ``;
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ` `;
        }
        return str;
    }
}


const main = () => {
    let queue_size = 5;
    let queue = new Queue();

    // pushing elements onto the stack
    for (let i = 1; i <= queue_size; i++) {
        queue.enqueue(i*10);
    }

    console.log(`Elements pushed into Queue.`);
    console.log(`Size of Queue :${queue.getSize()}`);       // 5
    console.log(`Front of Queue :${queue.front()}`);           // 50

    // printing the stack
    console.log(`Printing the queue...`);
    console.log(`[ ${queue.printQueue()} ]`);             // [10, 20, 30, 40, 50]

    // popping element from the stack
    // checking isEmpty condition
    if (!queue.isEmpty()) {
        let element = queue.dequeue();
        console.log(`Popped element is ${element}`);        // 50
    } else {
        console.log(`Queue is empty !!`);
    }

    console.log(`Size of Queue :${queue.getSize()}`);       // 4
    console.log(`Front of Queue :${queue.front()}`);           // 40

    // printing the stack
    console.log(`Printing the queue...`);
    console.log(`[ ${queue.printQueue()} ]`);               // [10, 20, 30, 40]
}

// calling main function
main();