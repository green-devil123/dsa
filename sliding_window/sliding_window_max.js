let arr = [1, 22, 5, -9, -45, 89];
let n = arr.length;
let k = 3;
//output = 35


function maxArray(arr, n, k){
	let max = 0;
	for(let i=0 ; i< k; i++){
	    max += arr[i]; 
    }
    let window_max  = max;
    for(let i=k ; i< n; i++){
        window_max += - arr[i-k] + arr[i];
        max = Math.max(window_max, max);
    }

    return max;
}

console.log(maxArray(arr, n, k));
