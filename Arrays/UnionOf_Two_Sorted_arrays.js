
   // Brute force approach 

/*


function  union_two_sorted_arrays() {

}
let arr1 = [1,1,3,4,5,4];
let arr2 = [2,3,4,4,5];
let myset = new Set();

// for arr1

for(let i=0;i<arr1.length;i++){
    myset.add(arr1[i]);        // O(N)
}

// for arr2
for(let i=0;i<arr2.length;i++){ 
    myset.add(arr2[i])                   //  O(N)
}
 
// union array:
let union_arr =  new Array();     
console.log(myset.size)       //O(1)

myset.forEach((values)=>{              // for pushing the element it takes o(1) and for iterating it takes O(N)
     union_arr.push(values);        
})

console.log("union of two sorted arrays");
for(let i=0;i<union_arr.length;i++){           
    console.log(`${union_arr[i]}`);
}
 


/*
Therefore, the total time complexity of the provided code is O(N + M), where N is the total number of elements in both arrays and M is the number of distinct elements.

*/      

// ye complexity ve ho ski hai O(2N+M)
// SC -> O(N)


// BETTER SOLUTION :


