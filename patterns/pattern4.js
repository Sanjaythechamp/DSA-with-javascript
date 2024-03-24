/*

1
22
333
4444
55555


*/


function print(n){
    for(let i=0;i<n;i++){
        for( let j=1;j<=i+1;j++){
            process.stdout.write(`${i+1}`)           // it will not jump directly to new line 
            
        }

        console.log(""); // due to this we move to next line
     
    }

}
print(5)