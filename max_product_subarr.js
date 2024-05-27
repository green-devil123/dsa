// //maxSubarray product of subarray

// // let data = [2,3,-2,4];
let data = [-2,0,-1]
// let data = [-3,0,1,-2]
function maxProductSubArray(nums){
	let max_so_far = Number.MIN_SAFE_INTEGER;
	let leftProduct = 1;
	let rightProduct = 1;
	let low=0, high = nums.length-1;
	while(low < nums.length){
        leftProduct = leftProduct == 0 ?  1: leftProduct * nums[low];
        rightProduct = rightProduct == 0 ?  1: rightProduct * nums[high-low];
        max_so_far = Math.max(leftProduct, rightProduct, max_so_far);
        low++;
    }
    return max_so_far;
}



console.log(maxProductSubArray(data));
