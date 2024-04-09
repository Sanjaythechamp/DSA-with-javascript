// if we know that element will always start from natural no: this is not a good aproach:
/*
let arr = [1,2,4,5];
let j = arr[i];    
for(let i= 0 ;i<arr.length-1;i++){
  
    if(arr[i] === j ){
        j = j+1;
    }

    
    else{
            console.log(`This element is not present in ${j}`)
            break;
         }
    }


 
*/


 //Another approach :
 
 let arr = [1,2,3,4,6];
 for(let i=1;i<=arr.length;i++){
   let flag = 0;
    for(let j = 0;j<arr.length-1;j++){
        if(arr[j]===i){
            flag =1;
            break;
        }
    }
    if(flag === 0){
    console.log(i);
    return i;
}

 }