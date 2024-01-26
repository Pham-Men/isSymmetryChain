"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymmetryChain = exports.Queue = exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(limit) {
        this.container = [];
        this.limit = limit;
        this.container = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.container.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.container.length === this.limit;
    };
    Stack.prototype.push = function (value) {
        if (this.isFull()) {
            throw new Error("Stack is full");
        }
        this.container.push(value);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.container.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
var Queue = /** @class */ (function () {
    function Queue(limit) {
        this.container = [];
        this.limit = limit;
    }
    Queue.prototype.isFull = function () {
        return this.container.length === this.limit;
    };
    Queue.prototype.isEmpty = function () {
        return this.container.length === 0;
    };
    Queue.prototype.enqueue = function (value) {
        if (this.isFull()) {
            throw new Error('Queue is full');
        }
        this.container.push(value);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.container.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
function isSymmetryChain(str) {
    var stack = new Stack(50);
    var queue = new Queue(50);
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
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
exports.isSymmetryChain = isSymmetryChain;
