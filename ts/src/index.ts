/**
 * Enumerate through an Iterable and get the index
 * @param ite Iterable
 * @param start Where should the iteration begin
 */
export default function* enumerate<T>(ite: Iterable<T>, start = 0) : IterableIterator<[number, T]> {
    let i = start;

    for (const element of ite) {
        yield [i, element];
        i++;
    }

    return i;
}
