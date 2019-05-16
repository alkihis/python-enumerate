"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enumerate through an Iterable and get the index
 * @param ite Iterable
 * @param start Where should the iteration begin
 */
function* enumerate(ite, start = 0) {
    let i = start;
    for (const element of ite) {
        yield [i, element];
        i++;
    }
    return i;
}
exports.default = enumerate;
