
//  we find the length of Longest Consecutive Sequence  
/*

function linearsearch(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === num){
            return true;
        }
      
    }
    return false;
}
function Longest_Subsequence_Length(){
let arr = [102,4,100,101,3,2,1,1];
let longest_length = 0;

for(let i=0;i<arr.length;i++){
    
    let x = arr[i];
    let cnt= 1;
    
 
    while(linearsearch(arr,x+1) ===true){
        x=x+1;
        cnt++;
    }

  longest_length = Math.max(longest_length,cnt)

}
return longest_length;
}
let res = Longest_Subsequence_Length();
console.log(`The length of longest Subsequence length is ${res}`);


// tc is O(N)*O(N)
*/


// Better Approach :





function longestSuccessiveElements(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    // sort the array:
    arr.sort((a, b) => a - b);
    let lastSmaller = -Infinity;
    let cnt = 0;
    let longest = 1;

    // find longest sequence:
    for (let i = 0; i < n; i++) {
        if (arr[i] - 1 === lastSmaller) {
            // arr[i] is the next element of the
            // current sequence.
            cnt += 1;
            lastSmaller = arr[i];
        } else if (arr[i] !== lastSmaller) {
            cnt = 1;
            lastSmaller = arr[i];
        }
        longest = Math.max(longest, cnt);
    }
    return longest;
}

let arr = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(arr);
console.log("The longest consecutive sequence is", ans);

// tc is Time Complexity: O(NlogN) + O(N), N = size of the given array.
//Reason: O(NlogN) for sorting the array. To find the longest sequence, we are using a loop that results in O(N).

//Space Complexity: O(1), as we are not using any extra space to solve this problem.



// optimal approach:


/*

function longestSuccessiveElements(a) {
    let n = a.length;
    if (n === 0)
        return 0;

    let longest = 1;
    let st = new Set();
    
    // put all the array elements into set
    for (let i = 0; i < n; i++) {
        st.add(a[i]);
    }

    // Find the longest sequence
    for (let it of st) {
        // if 'it' is a starting number
        if (!st.has(it - 1)) {
            // find consecutive numbers
            let cnt = 1;
            let x = it;
            while (st.has(x + 1)) {
                x = x + 1;
                cnt = cnt + 1;
            }
            longest = Math.max(longest, cnt);
        }
    }
    return longest;
}

let a = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(a);
console.log("The longest consecutive sequence is", ans);


Time Complexity: O(N) + O(2*N) ~ O(3*N), where N = size of the array.
Reason: O(N) for putting all the elements into the set data structure. After that for every starting element, we are finding the consecutive elements. Though we are using nested loops, the set will be traversed at most twice in the worst case. So, the time complexity is O(2*N) instead of O(N2).

Space Complexity: O(N), as we are using the set data structure to solve this problem.

Note: The time complexity is computed under the assumption that we are using unordered_set and it is taking O(1) for the set operations. 

If we consider the worst case the set operations will take O(N) in that case and the total time complexity will be approximately O(N2). 
And if we use the set instead of unordered_set, the time complexity for the set operations will be O(logN) and the total time complexity will be O(NlogN).

*/