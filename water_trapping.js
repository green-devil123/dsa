//Time complaexity O(n) && Space complexity O(n)
// let height = [4,2,0,3,2,5];
// let leftMax = [];
// let rightMax = [];
// const n = height.length;
// leftMax[0] = height[0];
// rightMax[n-1] = height[n-1];

// for(let i=1;i<n;i++){
//     leftMax[i] = Math.max(leftMax[i-1], height[i]);
// }

// for(let i=n-2;i>=0;i--){
//     rightMax[i] = Math.max(rightMax[i+1], height[i]);
// }
// console.log(leftMax);
// console.log(rightMax);
// let waterTrapping = 0;
// for(let i=0;i<n;i++){
//     waterTrapping += Math.min(leftMax[i], rightMax[i]) - height[i];
// }
// console.log(waterTrapping);


let height = [0,1,0,2,1,0,1,3,2,1,2,1];

const n = height.length;
let low = 0;
let high = n-1;
let leftMax = height[low];
let rightMax = height[high];
let waterLevel = 0;
while(low <= high){
    if(leftMax < rightMax){
        leftMax = Math.max(leftMax, height[low]);
        waterLevel += leftMax-height[low]
        low++;
    }else{
        rightMax = Math.max(rightMax, height[high]);
        waterLevel += rightMax-height[high]
        high--;
    }
}

console.log(waterLevel)