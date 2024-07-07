 // Return the minimum interger[bananas/hour] ,such that koko can eat all bananas within h hours.
 //Math.ceil(4.2);  // Output: 5

 function hours_count(piles,mid){
    let ans = 0;
for(let i=0;i<piles.length;i++){

     ans  =  ans + Math.ceil(piles[i]/mid);

}

return ans ;           // here ans is when mid divided by each of the bananas and count the the hours take 
  

}


function koko(){

    piles = [30,11,23,4,20];
    let hours = 5;
    let ans = 100000;
    let low = 1;
    let high = Math.max(...piles);   // O(N)
    
    while(low<=high){      // O(log2(max))
        let mid = Math.ceil((low+high)/2);

        let hours_take =  hours_count(piles,mid); // O(N)

        if(hours_take <=hours){
             ans = Math.min(ans,mid);
             high = mid-1;
              
        }
        else{
            low= mid+1
        }



    }
 return ans;

}

let result = koko();
console.log('Minimum hours take ');
console.log(result)

 // Tc ->O(log2(max)) * O(N)
