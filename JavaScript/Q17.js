
// function exponentFactory(val){
//     if(val===2){
//         return function square(x){
//             return x*x;
//         };
//     }else if(val===3){
//         return function cube(x){
//             return x*x*x;
//         }
//     }else {
//         return function default_val(x){
//             return x;
//         }
//     }

// }

// let fn =exponentFactory(2);
// console.log("sqr "+fn(3));

// fn=exponentFactory(3);
// console.log("Cube "+fn(3));
// fn=exponentFactory(5);
// console.log("default "+fn());


// function foo(){
//     try {
//         console.log( this instanceof Window );
//         console.log( 'browser is running the code' );
//     } catch( err ) {
//         console.log( 'Node.js is running the code' );
//     }
// }
// console.log(foo());

// // function 
// let cn = {x:1,
//             newfn(){
//                 console.log(this.x);
//             }
// };
// let cal_fn = cn.newfn.bind(cn, 2 );
// console.log("bind "+cal_fn());

// const jerry = {
//     name:'tom',
//     age:23,
//     changeAge(){
//         console.log(this.age);
//         this.age++;
//     }
// }
// console.log(jerry);
// console.log(jerry.changeAge());


// function sum(x,y=0){
//     console.log(this);
//     return x+y;
// }
// let bound = sum.bind(null,5);
// console.log("bound "+bound(9));



// function random(min,max){
//     return parseInt(Math.random(100,200)*100+100);
// }
// console.log(random(100,200));

// var quote = "With great power comes great responsibilty"
// console.log(quote);
// console.log(quote.replace("responsibilty", "electricity bill"));
// console.log(quote.indexOf("great"));
// console.log(quote.slice(0,11));

// let num = [5,11,13,7,2,31,3,19,23,17,29];
// console.log("increasing order ",num.sort(function(a,b){return a-b;}));
// console.log("decreasing order ",num.sort(function(a,b){return b-a;}));
// num.push(37)
// console.log("push ",num);
// num.pop();
// num.pop();
// console.log("pop ",num);

// num.splice(3,2,'seven','Eleven');
// console.log(num);
// console.log("element present or not at index  ",num.indexOf(23));
// console.log("element present or not at index  ",num.indexOf(41));


// const bday = new Date( 1999, 8 /* Jan - 0, Dec - 11 */, 19 );
// console.log(bday);
// console.log( bday.toLocaleString() );
// bday.setFullYear(2021);
// console.log( bday.toLocaleString() );
// console.log( bday.getDay() );



function nextQuote(x){
    return  function incr(){
        return x++;
    }
}
let inc = nextQuote(0);
console.log("inc ",inc);
console.log(inc(2));
console.log(inc());
console.log(inc());
console.log(inc());