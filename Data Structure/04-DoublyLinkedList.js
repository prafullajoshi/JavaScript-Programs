class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Adding element at the end i.e., we have to just move head pointer
    add = (element) => {
        let node = new Node(element);

        // if there is no any existing element
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    // Adding element at specific position
    addAt = (element, pos) => {
        let current = this.head;
        let counter = 1;
        let node = new Node(element);
        if (pos == 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            while (current) {
                current = current.next;
                if (counter == pos) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                }
                counter++;
            }
        }
    }

    // Removing an element from list
    remove = (element) => {
        let current = this.head;
        while (current) {
            if (current.data === element) {
                if (current == this.head && current == this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current == this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                } else if (current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    current,prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next;
        }
    }

    // Removing an element at specific position
    removeAt = (pos) => {
        let current = this.head;
        let counter = 1;
        if (pos === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            while (current) {
                current = current.next;
                if (current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else if (counter === pos) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break;
                }
                counter++;
            }
        }
    }

    // Reverse the entire list
    reverse = () => {
        let current = this.head;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
    }

    // Swap two nodes
    swap = (nodeOne, nodeTwo) => {
        let current = this.head;
        let counter = 0;
        let firstNode;
        while (current !== null) {
            if (counter == nodeOne) {
                firstNode = current;
            } else if (counter == nodeTwo) {
                let temp = current.data;
                current.data = firstNode.data;
                firstNode.data = temp;
            }
            current = current.next;
            counter++;
        }
        return true;
    }

    // Search element in a list
    search = (element) => {
        let current = this.head;
        let counter = 0;

        while (current) {
            if (current.data === element) {
                return counter;
            }
            current = current.next;
            counter++;
        }
        return false;
    }

    // Traverse the List

    // Length of Doubly Linked List
    length = () => {
        let current = this.head;
        let counter = 0;
        while (current !== null) {
            counter++;
            current = current.next;
        }
        return counter;
    }

    // Check whether list if empty or not
    isEmpty = () => {
        return this.length() < 1;
    }
}