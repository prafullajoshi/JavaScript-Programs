// user defined class node
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// user defined linked-list class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // functions to be implemented
    add = (element) => {
        // Create a new node
        let node = new Node(element);

        // to store the current node
        let current;

        // if the list is empty, add the element and make it head
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            //iterate to the end of the list
            while (current.next) {
                current = current.next;
            }

            // add node at the end
            current.next = node;
        }
        this.size++;
    }

    // Adding an element in between
    insertAt = (element, index) => {
        if (index < 0 || index > this.size) {
            return false;
        } else {
            // Creates a new node
            let node = new Node(element);
            let curr, prev;

            // add element at the first index
            if (index === 0) {
                node.next = this.head;          // point node->next to the head (forward link)
                this.head = node;
            } else {
                curr = this.head;               // point curr to the head
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                // adding the element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // Removing an element from a specific position
    removeAt = (index) => {
        if (index < 0 || index > this.size) {
            return -1;
        } else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // removing 1st element
            if (index === 0) {
                this.head = curr.next;
            } else {
                
                // iterate over list to remove an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // removing an element
                prev.next = curr.next;
            }
            this.size--;
            return curr.element;
        }
    }

    // Removing given element from the list
    removeFrom = (element) => {
        let curr = this.head;
        let prev = null;

        // iterate over list to find an element to be deleted
        while (curr !== null) {
            // comparing an element with current element, if found return remove and return true
            if (curr.element === element) {
                if (prev === null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.element;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1;
    }
}