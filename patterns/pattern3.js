
/*

1
12
123
1234
12345



*/





function print(n){
    for(let i=0;i<n;i++){
        for( let j=1;j<=i+1;j++){
            process.stdout.write(`${j}`)           // it will not jump directly to new line 
            
        }

        console.log(""); // due to this we move to next line
     
    }

}
print(5)