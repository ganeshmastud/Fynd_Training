function max( arr, property ) {
    let result = arr[0];

    for( let i = 1; i < arr.length; i++ ) {
        if( arr[i][property]> result[property] ) {
            result = arr[i];
        }
    }

    return result;
}

// console.log( max( [ 23, 56, 45, 21 ],  ) );

let persons = [
    { name: 'John', age: 32, children: 2 },
    { name: 'Jane', age: 28, children: 2 },
    { name: 'Mark', age: 44, children: 1 },
    { name: 'Mary', age: 30, children: 4 }
];



console.log( max( persons, "age" ) );
console.log( max( persons, "children" ) );
