
// Brute force Method : 
/*
function RearrangeElementsBysign(){
    let arr = [3,1,-2,-5,2,-4]
let positives = [];
let Negatives = [];
let j =0;
let k=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        positives[j] = arr[i];
        j++;
    }
    else{
        Negatives[k] = arr[i];
        k++;

    }
}
let l=0;
let m =0;
for(let i=0;i<arr.length;i++){
 if(i%2===0){
    arr[i] = Negatives[l];
    l++;
 }
 else{
    arr[i] = positives[m];
    m++;
 }

}
return arr;
}

let res = RearrangeElementsBysign();

console.log(res);


// tc is O(N + N)
// if array contain equal positive and and equal negatives then sc is O(n/2 + n/2) = O(N)
// 

*/

// Optimal solution:
function RearrangeElementsBysign(){

let arr = [3,1,-2,-5,2,-4];
let ans = [];
let positive_index = 0;
let Negative_index = 1;

for(let i=0;i<arr.length;i++){
    
    if(arr[i]<0){
        ans[Negative_index] = arr[i];
        Negative_index +=2;
    }
    else{
        ans[positive_index] = arr[i];
        positive_index +=2;
    }


}
return ans;
}

let res = RearrangeElementsBysign();
console.log(res);

// this optimal solution code takes tc is O(N)
// and space complexity is O(N)