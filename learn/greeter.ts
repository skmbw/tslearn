class Programmer {
    name:string;
 
    study() {
        console.log(name + "学习");
    }
}
 
var p1 = new Programmer();
p1.name = "李四";
p1.study();
 
var p2 = new Programmer();
p2.name = "韩梅梅";
p2.study();