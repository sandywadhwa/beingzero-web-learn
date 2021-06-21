function divideAsync(a, b, resolveCallback, rejectCallback){
    if(b==0){
        rejectCallback('Can not divide by ZERO');
    }
    else{
        resolveCallback(a/b);
    }  
}

divideAsync(3, 0, function(result){
        console.log("Result is "+result);
    }, function(err){
        console.log("ERROR: "+err);
    });