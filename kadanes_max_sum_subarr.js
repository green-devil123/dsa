//maxSubarray sum by kadane algorithm

let data = [-2 , 1, -3, 4, -1, 2 , 1, -5, 4];
function maxSumSubArray(nums){
let maxi = nums[0];
let sum = 0;
for(let i=0 ; i<nums.length ; i++){
	sum += nums[i];
	maxi = Math.max( sum, maxi );
	if(sum<0) sum=0;
}
return maxi;
}

console.log(maxSumSubArray(data));
