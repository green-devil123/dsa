function partition(arr, low, high){
    let pivot = arr[high];
    let i = low;

    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            let temp = arr[i];
            arr[i]= arr[j];
            arr[j] = temp;
            i++;
        }
    }

    let temp = arr[i];
    arr[i]= arr[high];
    arr[high] = temp;
    
    return i;
}
function quickSort(arr, low, high){
    
    if(low>=high) return ;

    let pivot = partition(arr, low, high);

    quickSort(arr, low, pivot-1);
    quickSort(arr, pivot+1, high);

}
let arr = [1,10,2,32,54,6,7,32,34]; 
let low = 0;
let high = arr.length-1;
quickSort(arr, low, high);

console.log(arr);