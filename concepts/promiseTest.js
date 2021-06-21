function divideAsync(a, b, resolve, reject){
    return new Promise(function(resolve, reject){
        if(b==0){
            reject('Can not divide by ZERO');
        }
        else{
            resolve(a/b);
        }
    });  
}

divideAsync(3, 0)
    .then(function(result){
        console.log("Result is "+result);
    })
    .catch(function(err){
        console.log("ERROR: "+err);
    });