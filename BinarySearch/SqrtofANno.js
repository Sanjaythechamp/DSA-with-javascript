// Brute force method : 

/*
function squareRoot(){
    let n = 50;
    for(let i=0;i<=n;i++){
        if(i*i <= n){
             ans = i;

        }
        else{
            break;
        }
    }
    return ans;
}
let result = squareRoot();
console.log(result)

*/

// using Binary Search method :

function squareRoot2(){
    let n = 28 ;
    let low = 1;
    let high = n;
    let ans =1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);


        if(mid *mid <= n ){
            ans = mid;
            low = mid+1
        }
        else{
              
            high = mid-1;
        }
    }
    return ans ;
    
}
let result = squareRoot2();
console.log(result )