
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

