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

/* -------------------------------------------------------------------------------- */

/* ts中的 keyof 用法 */
// interface User {
//     loginId: string;
//     loginPwd: string;
//     age: number;
//     sex: "男" | "女";
// }

// function printValue(obj: User, key: keyof User) {   // keyof User表示User的所有属性名(联合类型("loginId" | "login" | "age"))
//     console.log(obj[key]);
// }

// const u: User = {
//     loginId: "xiaobai",
//     loginPwd: "xiaobai1314",
//     age: 20,
//     sex: "男"
// }

// printValue(u, 'loginPwd');

/* -------------------------------------------------------------------------------- */

/* ts中的 in 用法 */
interface User {
    loginId: string;
    loginPwd: string;
    age: number;
    sex: "男" | "女";
    createDate: Date;
    pid: string;
}

// 例一: in用于遍历对象的属性
// 将User的所有属性值类型变成字符串,得到一个新类型
// type UserString = {
//     [p in keyof User]: string;  // UserString的属性名必须是User的属性名,属性值必须是string类型
// }

// const u: UserString = {
//     loginId: "xiaobai",
//     loginPwd: "xiaobai789",
//     age: "20",
//     sex: "女",
//     createDate: "2021-08-01",
//     pid: "123456"
// }

// 如果你不想它们全是字符串,并且所有属性设置只读,则可以用一下方式实现
// type UserReadonly = {
//     readonly [p in keyof User]: User[p]
// }

// const u: UserReadonly = {
//     loginId: "xiaobai",
//     loginPwd: "xiaobai789",
//     age: 20,
//     sex: "男",
//     createDate: new Date(),
//     pid: "123456"
// }
// u['loginId'] = 'xiaohong';  // 报错,因为loginId是只读的

// 若是想要将User的所有属性值类型变成可选的,则可以用以下方式实现
// type UserOptionalReadonly = {
//     readonly [p in keyof User]?: User[p]
// }

// const u: UserOptionalReadonly = {
//     loginId: "xiaobai"
// }

// 如果还是不满意,比如有很多接口都需要将属性值类型变成可选的,则可以使用泛型
interface Article {
    title: string;
    content: string;
    createDate: Date;
}

type StringObj<T> = {
    [p in keyof T]: string
}

type ReadonlyObj<T> = {
    readonly [p in keyof T]: T[p]
}

type PartialObj<T> = {
    [p in keyof T]?: T[p]
}

const stringArticle: StringObj<Article> = {
    title: "标题",
    content: "内容",
    createDate: "2021-08-01"
}

const readonlyUser: ReadonlyObj<User> = {
    loginId: "xiaobai",
    loginPwd: "xiaobai789",
    age: 20,
    sex: "男",
    createDate: new Date(),
    pid: "123456"
}

const partialArticle: PartialObj<Article> = {
    title: "标题",
    content: "内容"
}

partialArticle.createDate = new Date();  // createDate是可选的,所以可以赋值