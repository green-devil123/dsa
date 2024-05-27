// Brute Force

// function findMaxSubArraySlidingWindow(arr, n, k){
//     let temp = [];
//     for(let i=0 ;i<n-k+1 ;i++){
//         let max = arr[i];
//         for(let j=i+1 ; j< i+k; j++){
//             max = Math.max(max, arr[j])
//         }
//         temp.push(max);
//     }
//     return temp;
// }

// const arr = [2, 3, 7, 9, 5, 1, 6, 4, 3];
// const k = 3;
// const n = arr.length;
// console.log(findMaxSubArraySlidingWindow(arr, n, k));


//Time compexity - O(nlogn)
//space Complexity = O(n)


// class Pair{
// 	constructor(data, index){
// 	this.val = data;
// 	this.index = index;
// }
// }

// function maxSlidingWindowArr(arr, k, n){
// 	let heap = [];
//     let ans =[];

//     for(let i=0;i<k;i++){
//         heap.push(new Pair(arr[i], i));
//     }
//     heap.sort((a,b) => b.val-a.val);
//     ans.push(heap[0].val);

//     for(let i=k;i<n;i++){
//         heap.push(new Pair(arr[i], i));

//         if(heap[0].index <= i-k){
//             heap.shift();
//         }
//         heap.sort((a,b)=>b.val-a.val);

//         ans.push(heap[0].val);
//     }
//     return ans;
// }


// const arr = [2, 3, 7, 9, 5, 1, 6, 4, 3];
// const k = 4;


// console.log(maxSlidingWindowArr(arr, k, arr.length));


//Time Complexity = O(nlogn)
//Space Complexity = O(k)

function findMaxSubArraySlidingWindow(arr, n, k){
    let window_max = [];
    let ans = [];

    for(let i=0;i<k;i++){
        while(window_max.length > 0 && arr[i] >= arr[window_max[window_max.length-1]])
        window_max.pop();

        window_max.push(i);
    }
    ans.push(arr[window_max[0]]);

    for(let i=k;i<n;i++){
        
        while(window_max.length > 0 && window_max[0] <= i-k){
            window_max.shift();
        }

        while(window_max.length > 0 && arr[i] >= arr[window_max[window_max.length-1]])
        window_max.pop();

        window_max.push(i);
        
        ans.push(arr[window_max[0]]);
    }
    return ans;
}

const arr = [2, 3, 7, 9, 5, 1, 6, 4, 3];
const k = 3;
const n = arr.length;
console.log(findMaxSubArraySlidingWindow(arr, n, k));
