/* pattern

*
**
***
****
*****



*/





function print(n){
    for(let i=0;i<n;i++){
        for( let j=0;j<=i;j++){
            process.stdout.write("*")           // it will not jump directly to new line 
            
        }

        console.log(""); // due to this we move to next line
     
    }

}
print(5)