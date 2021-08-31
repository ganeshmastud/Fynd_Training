function sumArr(arr,opn){
    let sum_val=0
    for(let i=0;i<arr.length;i++){
        sum_val+=opn(arr[i]);

    }
    return sum_val;
}
function square(x){
    return x*x;
}
function cube(x){
    return x*x*x;
}
let arr=[1,2,3];
console.log(sumArr(arr,square));
console.log(sumArr(arr,cube));


