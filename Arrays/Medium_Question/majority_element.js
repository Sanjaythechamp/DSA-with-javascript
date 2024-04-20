// Brute force method:




// optimal solution :
let arr = [9, 4, 3, 9, 9, 4, 9, 9, 8]
//let arr = [7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5];
let n = arr.length;
function majority_element(arr){

let n = arr.length;
let element = 0;
let cnt = 0;

for(let i=0;i<n;i++){
    if(arr[element]===arr[i] ){
        cnt++;
    }
    else{
        cnt--;
    }

    if(cnt===0){
        element = i+1;
    }
    
  
}
return arr[element];
}



let majElem = majority_element(arr);
console.log(`${majElem}`)

// checking that majElem is majority or not  so we run loop and cnt majElem and compare with n/2
let cnt2 =0;
for(let i=0;i<n;i++){
if(arr[i]===majElem){
    cnt2++
}
}

if(cnt2 > n/2){
    console.log("yes this is majority")
}
else{
    console.log("this is not majority")
}
