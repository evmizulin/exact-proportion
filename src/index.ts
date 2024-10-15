import exactMath from 'exact-math';
import assert from 'assert/strict';

export const exactProportion = {
    a: (a: number) => ({
        ratioB: (b: number) => ({
            likeC: (c: number) => ({
                ratioX: () => {
                    assert(a !== 0);
                    return exactMath.div(exactMath.mul(c, b), a);
                },
            }),
        }),
    }),
};
