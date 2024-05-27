let arr = [1,10,2,32,54,6,7,32,34]; 
let low = 0;
let high = arr.length-1;
function conquer(arr, low,mid, high){
    let idx1 = low;
    let idx2 = mid+1;
    let temp = [];
    while(idx1 <= mid && idx2 <= high){
        if(arr[idx1]<= arr[idx2]){
            temp.push(arr[idx1++]);
        }else{
            temp.push(arr[idx2++]);
        }
    }

    while(idx1 <= mid){
        temp.push(arr[idx1++]);
    }

    while(idx2 <= high){
        temp.push(arr[idx2++]);
    }
    for (let index = 0; index < temp.length; index++) {
        arr[low+index] = temp[index];        
    }
}

function divide(arr, low, high){
    if(low>=high) return;
    let mid = Math.floor((low+high)/2);
    divide(arr, low, mid);
    divide(arr, mid+1, high)
    conquer(arr, low,mid, high);
}
divide(arr, low,high);
console.log(arr);

