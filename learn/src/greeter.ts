debugger; // ts-node的测试，使用node进行debug，不使用浏览器。使用浏览器还要编译成js来执行
// 如果这里没有导出export，那么在下面测试的时候，name赋值是成功的，但是study方法报找不到name属性
export class Programmer2 {
    name:string;
 
    study() {
        console.log(this.name + "学习");
    }
}
 
var p1 = new Programmer2();
p1.name = "李四";
p1.study();
 
var p2 = new Programmer2();
p2.name = "韩梅梅";
p2.study();