declare module 'exact-math' {
    interface ExactMath {
        add: (a: number, b: number, ...props: number[]) => number;
        mul: (a: number, b: number, ...props: number[]) => number;
        sub: (a: number, b: number) => number;
        div: (a: number, b: number) => number;
    }
    const exactMath: ExactMath;
    export default exactMath;
}
