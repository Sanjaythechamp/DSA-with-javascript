//Brute force : solve brute force then check optimal solution :











// Optimal solution :
let arr = [1,2,0,4,0,5,0];
let n = arr.length;

let j = -1;
// j are at zero in the arrray 
for(let i = 0 ;i<n;i++){
if(arr[i]===0){               // O(x)  x isliye liye hai jhn tk loop chlega to find 0 zeroes so we assume to find zeroes loop will run x times.
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