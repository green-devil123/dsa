let arr = [1, -5, 3, 100,3, 8, 9];
let n = arr.length;
//1st approach
function maxProfit(arr, n){
	let min = arr[0];
	let maxProfit = 0;
	for(let i=1;i<n;i++){
        let diff = arr[i] - min;
        maxProfit = Math.max(diff, maxProfit);
        min = Math.min(arr[i],min)
    }
    return maxProfit;
}

//2 approach
function maxProfit1(arr, n){
	let min = arr[0];
	let maxProfit = 0;
	for(let i=1;i<n;i++){
        if(arr[min] < arr[i]){
            maxProfit = Math.max(maxProfit, arr[i]-arr[min]);
        }else{
            min = i;
        }
    }
    return maxProfit;
}

console.log( maxProfit(arr, n) );
console.log( maxProfit1(arr, n) );
