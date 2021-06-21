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


async function testAsyncAwait(){
    try{
        // Caller
        var result = await divideAsync(3, 0);  // This will return ans from resolve function
        console.log("Result Is: "+result);
        // reject function will simply throw exception, use try catch when using async/await
    }
    catch(err){
        console.log("ERROR: "+err);
    }
}

testAsyncAwait();