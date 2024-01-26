class Stack<T> {
    private container: T[] = [];
    private limit: number;

    constructor(limit: number) {
        this.limit = limit;
        this.container = [];
    }

    isEmpty(): boolean {
        return this.container.length === 0;
    }

    isFull (): boolean {
        return this.container.length === this.limit;
    }

    push(value: T): void {
        if (this.isFull()) {
            throw new Error("Stack is full")
        }
        this.container.push(value);
    }

    pop(): T {
        if(this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.container.pop();
    }
}

class Queue <T> {
    private container: T[];
    private limit: number;

    constructor(limit: number) {
        this.container = [];
        this.limit = limit;
    }

    isFull (): boolean {
        return this.container.length === this.limit;
    }

    isEmpty(): boolean {
        return this.container.length === 0;
    }

    enqueue(value: T): void {
        if(this.isFull()) {
            throw new Error('Queue is full');
        }
        this.container.push(value);
    }

    dequeue (): T {
        if(this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.container.shift();
    }
}

function isSymmetryChain (str: string): boolean {
    const stack: Stack<string> = new Stack(50);
    const queue: Queue<string> = new Queue(50);

    for (const char of str) {
        stack.push(char);
        queue.enqueue(char);
    }

    if (!stack.isEmpty()) {
        if (stack.pop() !== queue.dequeue()) {
            return false;
        }
        return true;
    }

}

export {Stack, Queue, isSymmetryChain};