"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exactProportion = void 0;
const exact_math_1 = __importDefault(require("exact-math"));
const strict_1 = __importDefault(require("assert/strict"));
exports.exactProportion = {
    a: (a) => ({
        ratioB: (b) => ({
            likeC: (c) => ({
                ratioX: () => {
                    (0, strict_1.default)(a !== 0);
                    return exact_math_1.default.div(exact_math_1.default.mul(c, b), a);
                },
            }),
        }),
    }),
};
