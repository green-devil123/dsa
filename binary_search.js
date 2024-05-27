function binary_search(data, target, low, high, row){

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(data[mid] == target){
            return `${row}${mid}`;
        }else if(data[mid] > target){
            high = mid-1;
        }else{
            low = mid+1;
        }

    }
    return -1;
}

function iterative(arr, target){
    let index =-1;
    for (const i in arr) {
        index = binary_search(arr[i], target, 0, arr[i].length-1, i);
        if(index != -1) return index;
    }
    return -1;
}

const data = [[ 1, 3, 4],[ 5, 6, 8 ],[ 9, 10, 11 ]];
const target = 9;
console.log(iterative(data, target))