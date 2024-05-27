let arr =  [3, 3, 5, 0, 0, 3, 1, 4];
let n = arr.length;

function maxProfit(arr, n, index, buy, limit){
    if(index >= n) return 0;
    if(limit == 0) return 0;
    let profit = 0;
    if(buy == 1){
        let buyk = -arr[index] + maxProfit(arr, n, index + 1,0, limit);
        let skip = 0 + maxProfit(arr, n, index + 1, 1, limit);
        profit = Math.max(buyk, skip);
    }else{
        let sellk = +arr[index] + maxProfit(arr, n, index + 1,1, limit-1);
        let skip = 0 + maxProfit(arr, n, index + 1, 0,limit);
        profit = Math.max(sellk, skip);
    }
    return profit;
}
console.log(maxProfit(arr, n, 0, 1, 2 ));