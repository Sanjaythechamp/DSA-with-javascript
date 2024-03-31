
let arr = new Array();  // here inside array we take n  and store the values form user :
arr = [1,2,3,1,1,1,1,1,3,4,5,6,13];

let hash = new Array(14).fill(0);

for(let i =0;i<arr.length;i++){
    hash[arr[i]]++;
}
// enter query
let searchElement = 1;                 // here  also we take search element multiple 
                                    // let query ; enter query from user then while(query--){
                                   // enter search elemnt 
                                   // and do 
                                    //console(hash[searh element])
                                    // }
console.log(`${hash[searchElement]}`);

