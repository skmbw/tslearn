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

function sum() {
    // let args: number[] = arguments; // 类数组不是数组类型
    const args: IArguments = arguments;
}

// IArguments实际上是下面的类型
function sum2() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
// 可选参数，可选参数后面不允许再出现必需参数了
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 默认参数，会将添加了默认值的参数识别为可选参数，但是不必在必须参数的后面
function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom', 'Cat');
let tom2 = buildName2('Tom');

// 剩余参数只能是最后一个参数
function push(array: any[], ...items) { // items 隐含 any[] 类型，编辑器警告而已
    items.forEach(function(item) {
        array.push(item);
    });
}

function push2(array: any[], ...items: any[]) { // items 隐含 any[] 类型
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = []; // a 隐含 any[] 类型
push(a, 1, 2, 3);

// 函数重载，匹配时，从上往下，精确匹配
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string { // 联合类型
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}