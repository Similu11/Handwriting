/*给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。*/


/*示例 1：

输入：s = "loveleetcode", c = "e"
输出：[3,2,1,0,1,0,0,1,2,2,1,0]
解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。
示例 2：

输入：s = "aaab", c = "b"
输出：[3,2,1,0]
 

提示：
1 <= s.length <= 104
s[i] 和 c 均为小写英文字母
题目数据保证 c 在 s 中至少出现一次*/

let shortestToChar = function (s, c) {
    //先找出目标字符串中的目标字符索引
    let targetIndex = [], final = [];
    for (let index = 0; index < s.length; index++) {
        if (s[index] === c) {
            targetIndex.push(index);
        }
    }
    //防止出现仅有一次的情况
    targetIndex.push(99999999);
    let left = targetIndex[0];
    let right = targetIndex[1];
    let ins = 1;
    for (let i = 0; i < s.length; i++) {
        final.push(Math.min(Math.abs(left - i), (right - i)));
        if (i === right) {
            left = right;
            ++ins;
            right = targetIndex[ins];
        }
    }
    return final;
};
console.log(shortestToChar("loveleetcode", "e"));



/**
 * 实现symbol polyfill
    题解：如果浏览器不支持情况下 写出让代码让浏览器支持symbol
 */


let createName = (function () {
    let id = 0;
    return function (opt) {
        id++;
        return "_" + opt + '_' + id;
    }
})();
let mySymbol = function symbol_polyfill(str) {
    if (this instanceof symbol_polyfill) {
        throw new Error('symbol_polyfill is not constructor');
        return;
    }
    let myStr = str === undefined ? undefined : String(str);
    let symbol = Object.create({
        toString: function () {
            return this._name_;
        },
        valueOf: function () {
            return this;
        }
    })
    //Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
    Object.defineProperties(symbol, {
        "_name_": {
            value: createName(myStr),
            writable: false,
            enumerable: false,
            configurable: false
        },
        "_description": {
            value: myStr,
            writable: false,
            enumerable: false,
            configurable: false
        }
    })
    return symbol;
}

let mapFor = {};
Object.defineProperties(mySymbol, {
    for: {
        value: function (des) {
            let myDes = des == undefined ? undefined : String(des);
            return mapFor[myDes] ? mapFor[myDes] : mapFor[myDes] = mySymbol(myDes);
        },
        writable: false,
        enumerable: false,
        configurable: false
    },
    'keyFor': {
        value: function (obj) {
            for (let k in mapFor) {
                if (mapFor[k] == obj) return k;
            }
        },
        writable: false,
        enumerable: false,
        configurable: false
    }
})
let a = mySymbol('a');
let b = mySymbol('a');
let c = mySymbol.for('c');
let d = mySymbol.for('c');
let obj = {};
obj[a] = '60';
obj[b] = '60';
console.log(a == b); //false
console.log(c == d); //true
console.log(obj); //{_a_1: "60",_a_2: "60"}
