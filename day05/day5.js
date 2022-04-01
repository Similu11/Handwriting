
/*请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false
说明：

你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
*/


var MyQueue = function () {
    this.inStack = [];
    this.outStack = [];
};

MyQueue.prototype.push = function (x) {
    this.inStack.push(x);
};

MyQueue.prototype.pop = function () {
    if (!this.outStack.length) {
        this.in2out();
    }
    return this.outStack.pop();
};

MyQueue.prototype.peek = function () {
    if (!this.outStack.length) {
        this.in2out();
    }
    return this.outStack[this.outStack.length - 1];
};

MyQueue.prototype.empty = function () {
    return this.outStack.length === 0 && this.inStack.length === 0;
};

MyQueue.prototype.in2out = function () {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
    }
};


/*请计算出时钟的时针和分针的角度（两个角度的较小者，四舍五入）。时间以HH:mm的格式传入。*/

function angle(time) {

   let m = +time.slice(-2)/60*12
   let h = +time.slice(0,2) > 12 ? +time.slice(0,2)-12 : +time.slice(0,2)
   let ang = h-m>6 ? (12-h+m)/12*360-m/12*30 : (h-m)/12*360+m/12*30
   return Math.round(ang)
  }