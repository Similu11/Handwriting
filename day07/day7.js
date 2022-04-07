//给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
//输入：head = [1,2,3,4,5], k = 2
//输出：[4,5,1,2,3]
//输入：head = [0,1,2], k = 4
//输出：[2,0,1]
var rotateRight = function (head, k) {
    if (!head || k === 0) {
        return head
    }
    let cur = head
    let length = 0
    while (cur) {
        length++
        cur = cur.next
    }
    k = k % length
    if (k === 0) {
        return head
    }
    let pre = {
        next: head
    }
    let t = k
    while (t < length) {
        pre = pre.next
        t++
    }
    const newHead = pre.next
    pre.next = null
    pre = newHead
    while (pre.next) {
        pre = pre.next
    }
    pre.next = head
    return newHead
};

//请用你全部能展现能力的纯CSS+Vue3代码实现该设计稿件（注：loading条根据初始化数据动态展现，且需完成动画部分同时请注意边框细节）