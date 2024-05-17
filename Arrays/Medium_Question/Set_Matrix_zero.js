function matrix(){
    let temp= [];
    let no = 4;
    for(let i=0;i<=5;i++){
        
        for(let j=0;j<=5;j++){
            temp[i][j] = no ;
            no++;
        }
    }
    return temp;
}
let result = matrix();
//hdh

console.log(result);