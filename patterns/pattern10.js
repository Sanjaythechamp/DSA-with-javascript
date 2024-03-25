/*









*/




function print(n){
   
    for(let i=0;i<n;i++){
        let start =1;
        if(i%2===0)start =1;
        else  start =0
        for(let j=0;j<=i;j++){
            process.stdout.write(`${start}`);
            start = 1-start
        }
        console.log("");
    }

}
print(5)