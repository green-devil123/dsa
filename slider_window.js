let arr = [1, 3, -1, -3, 5, 3, 6, 7]
let n = arr.length;

//bruteforce
function maxProfit(arr,n){
	let k =3;
    let temp = [];
    for(let i=0 ; i<n-k+1; i++ ){
        let max = Number.MIN_SAFE_INTEGER;
        for(let j=i;j<i+k;j++){
            max = Math.max(max, arr[j]);
        }
        temp.push(max);
    }
    return temp;
}


console.log(maxProfit(arr, n));
