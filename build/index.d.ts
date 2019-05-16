/**
 * Enumerate through an Iterable and get the index
 * @param ite Iterable
 * @param start Where should the iteration begin
 */
export default function enumerate<T>(ite: Iterable<T>, start?: number): IterableIterator<[number, T]>;
