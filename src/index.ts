/* TS 中预设的类型演算 */

/* Partial<T>: 将T中的所有属性设置为可选 */
// interface User {
//     name: string;
//     age: number;
// }

// let partialUser: Partial<User>;

// partialUser = {
//     name: 'Jack',
//     age: 20
// }

/* -------------------------------------------------------------------------------- */

/* Required<T>: 将T中的所有属性设置为必选 */
// interface User {
//     name?: string;
//     age?: number;
// }

// const requiredUser: Required<User> = {
//     name: 'Jack',
//     age: 20
// }

/* -------------------------------------------------------------------------------- */

/* Readonly<T>: 将T中的所有属性设置为只读 */
// interface User {
//     name: string;
//     age: number;
// }

// const readonlyUser: Readonly<User> = {
//     name: 'Jack',
//     age: 20
// }

// readonlyUser.name = 'Tom'; // 报错: 所有属性都是只读的

/* -------------------------------------------------------------------------------- */

/* Exclude<T, U>: 从T中排除可以赋值给U的类型 */
// type gender = "男" | "女" | null | undefined;

// const excludeUser: Exclude<gender, null | undefined> = '男';    // 不能赋值为null或undefined

/* -------------------------------------------------------------------------------- */

/* Extract<T, U>: 提取T中可以赋值给U的类型 */
// let u: Extract<"a" | "b" | "c" | "d", "a" | "d" | "e" | "f">; // "a" | "d"

/* -------------------------------------------------------------------------------- */

/* NonNullable<T>: 从T中排除null和undefined */
// type str = string | null | undefined;
// let nonNullableStr: NonNullable<str> = 'hello'; // 只能赋值为string类型

/* -------------------------------------------------------------------------------- */

/* ReturnType<T>: 获取函数类型的返回值类型 */
// 示例一
// type sum = (a: number, b: number) => number;
// const concatNumbers: sum = (a, b) => a + b;

// let returnTypeSum: ReturnType<sum> = concatNumbers(1, 2);
// 示例二
// function add(a: number, b: number) {
//     return a.toString() + b.toString();
// }

// let returnTypeAdd: ReturnType<typeof add> = add(1, 2);

/* -------------------------------------------------------------------------------- */

/* InstanceType<T>: 获取构造函数类型的实例类型 */
// 这个演算符的使用场景是在泛型中，用于获取构造函数的实例类型
class User {
    loginId: string;
}

class Article { }

type twoParamsConstructor = new (argOne: string, argTwo: string) => Article;

type Inst = InstanceType<twoParamsConstructor>;