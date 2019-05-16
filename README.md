# python-enumerate

> Enumerate through an Iterable and get the index

Python's build-in function in JS.

# Install

```bash
npm i python-enumerate
```

# Usage

Takes one iterable, and return a tuple of [index, current_element].
You can specify a base index (it will NOT change the order / beginning of where the iteration starts in iterable).

## Default
```ts
import enumerate from 'python-enumerate';

const a = [1, 3, 5];

for (const [i, v] of enumerate(a)) {
    console.log(i, v); // => 0 1 then 1 4 then 2 6
}
```
