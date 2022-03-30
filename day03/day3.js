/*和Promise.all()不同，Promise.allSettled() 会等待所有的promise直到fulfill或者reject。

你能实现自己的Promise.allSettled() 吗?*/

function allSettled(args) {
    return new Promise((resolve) => {
        let len = args.length;
        let result = [];
        if (len == 0) {
            resolve(result);
        }
        let amassResult = function (res) {
            result[res.ins] = res.data;
            if (result.length == len) {
                resolve(result);
            }
        }
        for (let i = 0; i < len; i++) {
            Promise.resolve(args[i]).then(res => {
                amassResult({
                    status: 'fulfilled',
                    data: res,
                    ins: i
                })
            }).catch(err => {
                amassResult({
                    status: 'rejected',
                    data: err,
                    ins: i
                })
            })
        }
    })
}

allSettled([1, 2, 3]).then(data => {
    console.log(data);
})

/**
 * 请你设计一个支持下述操作的栈。

实现自定义栈类 CustomStack ：

CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
int pop()：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1 。
void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。
 */

class CustomStack {
    constructor(len) {
        this.maxSize = len;
        this.value = new Array();
        this.top = -1;
    }

    push(val) {
        if (this.value.length < this.maxSize) {
            this.value[++this.top] = val;
        } else {
            return false;
        }
    }

    pop() {
        return this.value.length ? this.value[this.top--] : -1;
    }

    inc(k, v) {
        for (var i = 0, j = this.top; i < k; i++, j--) {
            this.value[j] += v;
        }
        return this.value;
    }
}
// let myStack = new CustomStack(10);
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);
// console.log(myStack.pop());
// console.log(myStack.pop());
// myStack.inc(5,10);
// console.log(myStack);
