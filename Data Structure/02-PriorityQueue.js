// User defined class to store queue and its elements
class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// Priority Queue class
class PriorityQueue {
    // An array is used to implement priority
    constructor() {
        this.items = [];
    }

    // Add element to the queue according to it's priority
    enqueue = (element, priority) => {
        // creating object from queue element
        let qElement = new QElement(element, priority);
        let contain = false;

        // interating over entire to add element at correct position of Queue
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once correct location if found, element is enqueued
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }

            // if the element has highest priority, then it is added at the end of queue
            if (!contain) {
                this.items.push(qElement);
            }            
        }
    }

    // Removes an element from the priority queue
    dequeue = () => {
        // returns dequeued element and removes it
        if (this.isEmpty()) {
            return `Underflow`;
        }
        return this.items.shift();
    }

    // Returns the front element of the priority queue
    front = () => {
        // returns highest priority element
        if (this.isEmpty()) {
            return `No elements in queue !`;
        }
        return this.items[0];
    }

    // Returns the last element of the priority queue
    rear = () => {
        // returns lowest priority element
        if (this.isEmpty()) {
            return `No elements in queue !`;
        }
        return this.items[0];
    }

    // HELPER FUNCTION
    // Returns true if priority queue is empty
    isEmpty = () => {
        return this.items.length === 0;
    }

    // It prints elements of queue as per the priority starting from highest to lowest
    printPQueue = () => {
        let str = '';
        for (let i = this.items; i < this.items.length; i++) { 
            str += this.items[i].element + ` `;
        }
        return str;
    }


}