
var testPromise = new Promise((resolve, reject)=>{
    if(true){
        resolve("hello it worked");
    }
    else{
        reject("Error Occured");
    }
});

testPromise.then((msg)=>{
    console.log(msg);
    console.log("success block");
},(errorMsg)=>{
    console.log("failure block");
    console.log(errorMsg);
});

var add =(a,b) =>{
    return new Promise((resolve,reject)=>{
        if(a!=b){
            resolve(a+b);
        }
        else{
            reject("Error");
        }
    });
};

add(10,30)
.then((msg)=>{
    console.log("result 1 : "+msg);
    return add(30,60);

})
.then((msg)=>{
    console.log("result 2 :"+msg);
})
.catch(()=>{
    console.log("error");
});

var allpromise= Promise.all([testPromise,add(10,20),add(30,50)]);
allpromise.then(console.log,console.error);