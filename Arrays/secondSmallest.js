function secondsmalles(arr,n){
let smallest = arr[0];
let second_smallest = 200;     // here we take INT-MAX NUMBER, BUT IN JS WE USE IN ANOTHER WAY ; 200 IS FOR PRACTICE
for(let i=1;i<<n;i++){
    if(arr[i<smallest]){
        second_smallest = smallest
        smallest = arr[i];
       
    }
    else if(arr[i]!=smallest && arr[i]<second_smallest){
                     second_smallest = arr[i];
    }
    
}
return second_smallest;


}

let arr = [4,5,3,3,2];
 let res = secondsmalles(arr,arr.length)
 console.log(`The Second smallest element is ${res}`);