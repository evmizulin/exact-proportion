export const proportion = {
    a: (a: number) => ({
        ratioB: (b: number) => ({
            likeC: (c: number) => ({
                ratioX: () => proportion.div(proportion.mul(c, b), a),
            }),
        }),
    }),
    div: (a: number, b: number) => a / b,
    mul: (a: number, b: number) => a * b,
};
