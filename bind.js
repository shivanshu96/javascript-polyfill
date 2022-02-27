let person = {
    firstname:'shivanshu',
    lastname:'sharma'
}

let printname = function(arg1,arg2){
    if(arg1 && !arg2){
        console.log(this.firstname+" "+this.lastname+" "+arg1);
    }else if(!arg1 && arg2){
        console.log(this.firstname+" "+this.lastname+" "+arg2);
    }else {
        console.log(this.firstname+" "+this.lastname+" "+arg1+" "+arg2);
    }
}

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function(...args1){
        obj.apply(args[0],[...params,...args1]);
    }
}

let printname2 = printname.myBind(person,["details","testing"]);
printname2();