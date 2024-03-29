function max(num){
let out = 0;
console.log(num[1])
    for(let i = 0; i < num.toString.length; i++){

        if(num > out){
            out = num;
        }
    }
    return out;
}


console.log(max([4,7,4,3,8]))