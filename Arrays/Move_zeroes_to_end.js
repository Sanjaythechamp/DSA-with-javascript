//Brute force : solve brute force then check optimal solution :

let arr = [1,2,3,0,0,5,4,0,3];
let n  = arr.length;

let temp = new Array();
console.log(temp.length)
let j = 0;
for(let i=0;i<n;i++){
if(arr[i]!==0){
  temp[j] =  arr[i];
  j++;                  // O(N)
}
}

for(let i=0;i<temp.length;i++){
     arr[i]  =  temp[i];              //  O(x)

}

for(let i=temp.length;i<n;i++){
  arr[i] = 0;                            // O(n-x)
}
  console.log(`${arr}`)

// Tc will be O(N)+ O(x)+O(n-x) => O(2n)
// sc O(x) if no of non zeroes will be x  but ,
// for worst case if array are all  non - zeroes then  TC wiil Be O(N)

















// Optimal solution :
/*
let arr = [1,2,0,4,0,5,0];
let n = arr.length;

let j = -1;
// j are at zero in the arrray 
for(let i = 0 ;i<n;i++){
if(arr[i]===0){               // O(x)  x isliye liye hai jhn tk loop chlega to find 0 zeroes, so we assume to find zeroes, loop will run x times.
  j=i;
  break;
}
}
for(let i = j+1;i<n;i++){

  if(arr[i] !== 0){              // O(n-x)
      let temp = arr [i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
  }
  
  
}
console.log(`modified array is ${arr}`);


// Tc is O(x)+o(n-x) = O(N):



*/