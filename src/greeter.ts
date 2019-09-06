debugger; // ts-node的测试，使用node进行debug，不使用浏览器。使用浏览器还要编译成js来执行
// 如果这里没有导出export，那么在下面测试的时候，name赋值是成功的，但是study方法报找不到name属性
export class Programmer {
    name:string;
 
    // F5开始调试，启动后，F5到下一个断点（IDEA F9），F10单步调试（IDEA F8）
    study() {
        console.log(this.name + "学习");
        const fruits = new Set(['apple', 'pear', 'mango']); // 只有es6以后才有Set
        // fruits['peach'] = 'Princess Peach.'; // 这个用法是不对的
        for (const fruit in fruits) { // 这种什么都没有
            console.log(fruit);
        }

        for (const fruit of fruits) {
            console.log(fruit);
        }
    }
}
 
var p1 = new Programmer();
p1.name = "李四";
p1.study();
 
var p2 = new Programmer();
p2.name = "韩梅梅";
p2.study();