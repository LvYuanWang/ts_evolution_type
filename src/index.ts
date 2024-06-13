/* ts中的 typeof 用法 */
// const a = 'fjkldsaj';
// const b: typeof a = 'fjkldsaj';     // 在某些情况下b的类型要与a的类型一致,但是a的类型有时候是不确定的,这时候可以使用typeof

// class User {
//     loginId: string;
//     loginPwd: string;
// }
// 例一: 用于函数参数类型的定义,除了使用构造函数外(new () => User),还可以使用typeof(typeof User)
// function createUser(cls: typeof User): User {
//     return new cls();
// }
// const user = createUser(User);

// 例二
// const u = new User();
// const u2 = u;    // u2的类型是User
// const A = User; // A的类型是typeof User(构造函数)
// new A();        // new A()的类型是User


/* ts中的 keyof 用法 */
interface User {
    loginId: string;
    loginPwd: string;
    age: number;
    sex: "男" | "女";
}

function printValue(obj: User, key: keyof User) {
    console.log(obj[key]);
}

const u: User = {
    loginId: "xiaobai",
    loginPwd: "xiaobai1314",
    age: 20,
    sex: "男"
}

printValue(u, 'loginPwd');