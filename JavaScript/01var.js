// var x= 1;
// console.log(typeof x);
// console.log(x);

// var x= 1.5;
// console.log(typeof x);
// console.log(x);

// var x= 'hello';
// console.log(typeof x);
// console.log(x);

// var x= true;
// console.log(typeof x+" x "+x);
// console.log(x);


// let str ="Hello", str2="H\"ello\"";
// console.log(str);
// console.log(str2);
// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);

// str[0]="I";
// console.log(str);

// let isSuny = true;
// console.log(typeof isSunny);


// let arr=[];
// for(let idx=0; idx<4;idx++){
//     arr[idx]=idx;
// }
// console.log(arr);
// arr[0]+=1;
// console.log(arr);
// arr[3]=arr[2]+arr[3];
// console.log(arr);
// arr.push(6);
// console.log(arr);

// let songs=[
//     {
//         name:'xyz',
//         singer:'pqr',
//         production:['music world','beatflow']

//     },
//     {
//         name : 'crazy',
//         singer : 'tuv',
//         production : ['music world','tunes']

//     }
// ]


// console.log(songs);

// let s =function (x,y){
//     return x**2; 
// }
// let sum =0;
// arr=[1,2,3,4,5];
// for(let i = 0; i<arr.length;i++){
//     sum+=s(arr[i]);
//     console.log("sum "+sum);
// }
// console.log("sum "+sum);

let movie = {
    name:"Batman",
    cast:['Cristian Bale', 'Katie ,Holmes','Cillian Murphy'],
    releaseDate: '17 June 2005 (India)',
    director: 'Christopher Nolan',
    boxOffice: 370000000,
    budget:'150000000',
    addToCast:function(new_member){
        this.cast.push(new_member);
    },
    addToCollection:function(add_amt){
        this.boxOffice +=add_amt;
    }
}
console.log(movie);
movie.addToCast('Morgan Freeman');
console.log(movie.cast);
console.log("prev "+movie.boxOffice);
movie.addToCollection(56000);
console.log("new "+movie.boxOffice);

