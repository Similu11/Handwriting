/*这个问题和“最多能完成排序的块”相似，但给定数组中的元素可以重复，输入数组最大长度为2000，其中的元素最大为10**8。

arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

我们最多能将数组分成多少块*/


var maxChunksToSorted = function(arr) {
    //定义最大数据栈
    let res=[]
    for(let i = 0; i < arr.length; i++) {
        if(res.length==0){
            res.push(arr[i])
        }else{
            if(arr[i]>=res[res.length-1]){
                res.push(arr[i])
            }else{
                let max=res[res.length-1]
                while(arr[i]<res[res.length-1]){
                    res.pop()
                }
                res.push(max)
            }
        }
    }
    return res.length
};


/*如果我们要从query中提取数据的话，可以使用 URLSearchParams ，非常方便。

你能否自己实现一个和URLSearchParams基本一样的MyURLSearchParams？*/