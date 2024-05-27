

// Returns length of smallest subarray with sum greater than x.
// If there is no subarray with given sum, then returns n+1
function smallestSubWithSum(arr, n, x)
{

	//initialize min_length = n+1;
    let min_length = n+1;
    for(let i=0 ; i<n ; i++){
        let currentSum = arr[i];

        if(currentSum >= x) return 1;

        for(let j=i+1;j<n;j++){
            currentSum +=  arr[j];
            if(currentSum > x && j-i+1 < min_length){
                min_length = j-i+1;
            }
        }
    }
    return min_length;

}

/* Driver program to test above function */
	let arr1 = [1, 4, 45, 6, 10, 19];
	let x = 51;
	let n1 = arr1.length;
	let res1 = smallestSubWithSum(arr1, n1, x);
	(res1 == n1 + 1)? console.log("Not possible<br>") :
					console.log(res1 + "<br>");

	let arr2 = [1, 10, 5, 2, 7];
	let n2 = arr2.length;
	x = 9;
	let res2 = smallestSubWithSum(arr2, n2, x);
	(res2 == n2 + 1)? console.log("Not possible<br>") :
					console.log(res2 + "<br>");

	let arr3 = [1, 11, 100, 1, 0, 200, 3, 2, 1, 250];
	let n3 = arr3.length;
	x = 280;
	let res3 = smallestSubWithSum(arr3, n3, x);
	(res3 == n3 + 1)? console.log("Not possible<br>") :
					console.log(res3 + "<br>");
//Time complexity is O(n^2) and space comlexity is O(1)
// This code is contributed by Surbhi Tyagi.
