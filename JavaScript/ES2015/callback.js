function  sum(x,y, callback ){
    setTimeout(() => {
        const result =x+y;
        callback(result);
    },2000 );
}

sum(12,13 ,function(result){
    console.log('result =',result);

    
    sum(result,14 ,function(result2){
        console.log('result =',result2);
        sum(result2,15 ,function(result3){
        console.log('result =',result3);
    });
    });
});