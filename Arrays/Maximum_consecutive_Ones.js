 // optimal approach 
 
 function Maximum_consecutive_Ones(){
    let arr = [1,1,0,0,0,1,1,1,1,0,1,1]
let maxi = 0;
let cnt = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]===1){
        cnt++;
        maxi = Math.max(maxi,cnt);

    }
    else{
        cnt = 0;
    }
    


}
console.log(`The maximum Consecutive ones is ${maxi}`)
    return maxi;
}
Maximum_consecutive_Ones();


// Tc =O(N)