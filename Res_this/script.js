var obj = {
    
    val: "stephen",
    print : function () {
        console.log(this.val);
        console.log (this.val);
        console.log("this inside:" ,this);
        }
};

obj.print();

obj2 ={
    
    val:"Daragh"
}

obj2.print = obj.print;

obj2.print ();

     console.log("this outside:" ,this);
     console.log("this outside:" ,this.cache);