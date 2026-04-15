console.log("Hello");
function test(){
    var a=1;var b=2;var c=3;var d=4;var e=5;

    if(a==1){
        if(b==2){
            if(c==3){
                if(d==4){
                    if(e==5){
                        console.log("nested too deep");
                    }
                }
            }
        }
    }

    console.log(a+b+c+d+e);
}

test();