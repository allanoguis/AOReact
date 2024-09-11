# **Javascript Notes**

## Array Methods

### Mutator Methods

| Method     | Description  |
|:---        |:---  |
| `.push()`   | Adds elements to the end of an array |
| `.pop()`    | Removes the last element from an array   |
| `.shift()`  | Removes the first element from an array  |
| `.unshift()`| Adds elements to the beginning of an array   |
| `.splice()` | Adds/Removes elements from an array  |
| `.slice()`  | Returns a shallow copy of a portion of an array  |

### Accessor Methods

| Method         | Description  |
|:---            |:---  |
| `.concat()`    | Joins two or more arrays and returns a copy of the result    |
| `.join()`      | Joins all elements of an array into a string |
| `.slice()`     | Returns a shallow copy of a portion of an array  |
| `.indexOf()`   | Returns the index of the first occurrence of a value in an array |
| `.lastIndexOf()`| Returns the index of the last occurrence of a value in an array |
| `.includes()`  | Determines whether an array includes a certain value among its entries   |
| `.find()`      | Returns the value of the first element in an array that satisfies a provided testing function    |
| `.findIndex()` | Returns the index of the first element in an array that satisfies a provided testing function    |

### Other Useful Methods

| Method           | Description    |
|:---              |:---    |
| `Array.isArray()`| Determines whether the passed value is an array    |
| `Array.from()`   | Creates a new array from an array-like or iterable object  |
| `Array.of()`     | Creates a new array with a variable number of arguments, regardless of number or type of the arguments |
| `.fill()`        | Fills the elements of an array with a static value |
| `.copyWithin()`  | Copies a sequence of array elements within the array   |
| `.flat()`        | Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth |
| `.flatMap()`     | First maps each element using a mapping function, then flattens the result into a new array    |
| `.entries()`     | Returns a new Array Iterator object that contains the key/value pairs for each index in the array  |
| `.keys()`        | Returns a new Array Iterator object that contains the keys for each index in the array |
| `.values()`      | Returns a new Array Iterator object that contains the values for each index in the array   |

### Reducer Methods

| Method     | Description  |
|:---        |:---  |
| `.reduce()`| Executes a reducer function on each element of the array, resulting in a single output value |

#### `.reduce()` Explained

- **Purpose**: Reduces an array to a single value.
- **Syntax**: `array.reduce(callback(accumulator, currentValue, index, array), initialValue)`

- **Key Components**:
  1. `callback`: Function called on each array element
  2. `accumulator`: Stores the accumulated result
  3. `currentValue`: Current element being processed
  4. `index`: Index of the current element (optional)
  5. `array`: The original array (optional)
  6. `initialValue`: Starting value for the accumulator (optional, but recommended)

- **Process**:
  1. Executes the callback function for each array element
  2. Passes the result to the next iteration as the accumulator
  3. Returns the final accumulated value

- **Example** (Sum of numbers):
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum); // Output: 10
  ```

- **Use Cases**:
  - Summing numbers
  - Flattening arrays
  - Grouping objects
  - Counting occurrences

- **Tip**: Always provide an initialValue to avoid unexpected behavior with empty arrays.

# Functions