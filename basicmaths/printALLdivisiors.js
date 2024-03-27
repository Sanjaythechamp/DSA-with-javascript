function printdivisior(n){

    for(let i =1;i<=n;i++){
        if(n%i === 0){
            console.log(`${i}`)
        }
    }

}
printdivisior(36)

// TC O(n)

// we can also do with finding squareroot then divisiors
