function sum(a,b){
    return a+b;
}

if(sum(1,2)!==3){
    throw new Error("Test failed");
}