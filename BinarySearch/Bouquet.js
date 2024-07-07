//Minimum no of days to make  m bouquet.



function possible(arr,bloomday,m,k){
    let noofbouquet = 0;
    let count = 0;
    for(let i =0;i<arguments.length;i++){
    
        if(arr[i]<=bloomday){
            count++;
        }
        else{
            count = 0;
            noofbouquet += (count/k);
            
        }
    }
    noofbouquet += (count/k)
 
    if(noofbouquet>=m){
        return true;
    }
    else{
        return false;
    }

}

function bouquet(){

    let arr = [ 7,7,7,7,13,11,12,7];
    let m = 2 ; // no of Bouquet make
    let K = 3; // 3 adjacent flowerrequired;
  

    let min = Math.min(...arr)
    let maxi  = Math.max(...arr);

    for(i=min ;i<=maxi;i++){
        
        if(possible(arr,i,m, k ) === true){
            return i;
        }
      
    }

return -1;


}
let result = bouquet();
console.log(result)