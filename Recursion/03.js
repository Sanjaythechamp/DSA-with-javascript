function print(n){

if(n<1){
    return ;
}
else{
   n--;
}
print(n)
console.log(`${n}`)


}

// print(6);
function print2(i,n){
    

    if(i>n){
        return;
    }
    else{
        console.log(`${i}`);

    }
    print2(i+1,n)

}
//print2(1,6);
