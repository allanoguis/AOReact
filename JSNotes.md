# **JavaScript Notes**

## Variables

### Declaration

| Keyword | Description |
|:--------|:------------|
| `var`   | Function-scoped or globally-scoped variable, can be redeclared and updated |
| `let`   | Block-scoped variable, can be updated but not redeclared |
| `const` | Block-scoped variable, cannot be updated or redeclared |

### Scope

| Scope Type | Description |
|:-----------|:------------|
| Global     | Variables declared outside any function or block, accessible everywhere |
| Function   | Variables declared within a function, accessible only within that function |
| Block      | Variables declared inside a block (e.g., if statements, loops), accessible only within that block (for `let` and `const`) |

### Hoisting

| Behavior | Description |
|:---------|:------------|
| `var`    | Hoisted to the top of its scope and initialized with `undefined` |
| `let`    | Hoisted to the top of its block but not initialized (Temporal Dead Zone) |
| `const`  | Hoisted to the top of its block but not initialized (Temporal Dead Zone) |

### Data Types

| Type      | Description | Example |
|:----------|:------------|:--------|
| Number    | Numeric data type | `let age = 25;` |
| String    | Textual data type | `let name = "John";` |
| Boolean   | Logical data type | `let isStudent = true;` |
| Undefined | Variable declared but not assigned a value | `let x;` |
| Null      | Intentional absence of any object value | `let empty = null;` |
| Symbol    | Unique identifier | `let id = Symbol('id');` |
| BigInt    | Integer values larger than 2^53 - 1 | `let bigNumber = 1234567890123456789012345678901234567890n;` |

### Objects and Arrays

| Type   | Description | Example |
|:-------|:------------|:--------|
| Object | Collection of key-value pairs | `let person = {name: "Alice", age: 30};` |
| Array  | Ordered list of values | `let colors = ["red", "green", "blue"];` |

### Type Coercion

| Operation | Description | Example |
|:----------|:------------|:--------|
| Implicit  | Automatic type conversion | `"5" + 3` results in `"53"` |
| Explicit  | Manual type conversion | `Number("5")` results in `5` |

### Variable Naming Conventions

| Convention | Description | Example |
|:-----------|:------------|:--------|
| camelCase  | First word lowercase, subsequent words capitalized | `let firstName = "John";` |
| PascalCase | Each word capitalized (typically used for classes) | `class Person {}` |
| snake_case | Words separated by underscores | `let user_age = 25;` |
| UPPERCASE  | All capital letters (typically used for constants) | `const MAX_SIZE = 100;` |

### Best Practices

- Use `const` by default, and only use `let` if rebinding is needed.
- Avoid using `var` in modern JavaScript.
- Choose meaningful and descriptive variable names.
- Use camelCase for variable and function names.
- Use PascalCase for class names.
- Use UPPERCASE for constants.
- Declare variables at the top of their scope.
- Avoid global variables when possible.

## Arrays

### Mutator Methods

| Method     | Description  |
|:---        |:---  |
| `.push()`   | Adds elements to the end of an array |
| `.pop()`    | Removes the last element from an array   |
| `.shift()`  | Removes the first element from an array  |
| `.unshift()`| Adds elements to the beginning of an array   |
| `.splice()` | Adds/Removes elements from an array  |

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

### Iteration Methods
| Method       | Description                                                                                       |
|:---          |:---                                                                                               |
| `.forEach()` | Executes a function for each array element                                                        |
| `.map()`     | Creates a new array with the results of calling a function for every array element                |
| `.filter()`  | Creates a new array with all elements that pass the test implemented by the provided function     |
| `.reduce()`  | Reduces the array to a single value                                                               |
| `.some()`    | Tests whether at least one element in the array passes the test implemented by the provided function |
| `.every()`   | Tests whether all elements in the array pass the test implemented by the provided function        |

### Other Array Methods
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
| `.sort()`        | Sorts the elements of an array in place and returns the sorted array                              |
| `.reverse()`     | Reverses the order of the elements in an array in place                                           |

## Strings

### String Methods

| Method        | Description                                                                |
|:---           |:---                                                                        |
| `.split()`    | Splits a string into an array of substrings                                |
| `.join()`     | Joins all elements of an array into a string                               |
| `.slice()`    | Extracts a section of a string and returns it as a new string              |
| `.substring()`| Returns the part of the string between the start and end indexes           |
| `.toLowerCase()`| Converts a string to lowercase letters                                   |
| `.toUpperCase()`| Converts a string to uppercase letters                                   |
| `.trim()`     | Removes whitespace from both ends of a string                              |
| `.replace()`  | Replaces a specified value with another value in a string                  |

## Objects

### Object Methods

| Method           | Description                                                                                   |
|:---              |:---                                                                                           |
| `Object.keys()`  | Returns an array of a given object's own enumerable property names                            |
| `Object.values()`| Returns an array of a given object's own enumerable property values                           |
| `Object.entries()`| Returns an array of a given object's own enumerable string-keyed property [key, value] pairs |
| `Object.assign()`| Copies the values of all enumerable own properties from one or more source objects to a target object |

## Math and Numbers

### Math Functions

| Function      | Description                                                               |
|:---           |:---                                                                       |
| `Math.random()`| Returns a random number between 0 and 1                                  |
| `Math.floor()` | Returns the largest integer less than or equal to a given number         |
| `Math.ceil()`  | Returns the smallest integer greater than or equal to a given number     |
| `Math.round()` | Returns the value of a number rounded to the nearest integer             |

### Other Math Functions

| Function         | Description                                                                                   |
|:---              |:---                                                                                           |
| `parseInt()`     | Parses a string argument and returns an integer of the specified radix                        |
| `parseFloat()`   | Parses a string argument and returns a floating point number                                  |
| `isNaN()`        | Determines whether a value is NaN or not                                                      |

## Timing and Asynchronous Operations

### Timing Functions

| Function        | Description                                                                                     |
|:---             |:---                                                                                             |
| `setTimeout()`  | Calls a function or evaluates an expression after a specified number of milliseconds            |
| `setInterval()` | Calls a function or evaluates an expression at specified intervals (in milliseconds)            |
| `clearTimeout()`| Cancels a timeout previously established by setTimeout()                                        |
| `clearInterval()`| Cancels a timed, repeating action which was previously established by setInterval()            |

### Promises and Async

| Function/Syntax | Description                                                                                     |
|:---             |:---                                                                                             |
| `Promise.all()` | Takes an iterable of promises as an input, and returns a single Promise                         |
| `Promise.race()`| Returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects |
| `async/await`   | Syntactic sugar for working with promises                                                       |

## DOM Manipulation

| Function                    | Description                                                                         |
|:---                         |:---                                                                                 |
| `document.getElementById()` | Returns the element that has the ID attribute with the specified value              |
| `document.querySelector()`  | Returns the first element that matches a specified CSS selector(s) in the document  |
| `document.querySelectorAll()`| Returns a static NodeList containing all elements that match the specified CSS selector(s) |
| `element.addEventListener()`| Attaches an event handler to the specified element                                  |

## JSON Handling

| Function         | Description                                                                                   |
|:---              |:---                                                                                           |
| `JSON.parse()`   | Parses a JSON string, constructing the JavaScript value or object described by the string     |
| `JSON.stringify()`| Converts a JavaScript object or value to a JSON string                                       |

## Variables

### Declaration

| Keyword | Description |
|:--------|:------------|
| `var`   | Function-scoped or globally-scoped variable, can be redeclared and updated |
| `let`   | Block-scoped variable, can be updated but not redeclared |
| `const` | Block-scoped variable, cannot be updated or redeclared |

### Scope

| Scope Type | Description |
|:-----------|:------------|
| Global     | Variables declared outside any function or block, accessible everywhere |
| Function   | Variables declared within a function, accessible only within that function |
| Block      | Variables declared inside a block (e.g., if statements, loops), accessible only within that block (for `let` and `const`) |

### Hoisting

| Behavior | Description |
|:---------|:------------|
| `var`    | Hoisted to the top of its scope and initialized with `undefined` |
| `let`    | Hoisted to the top of its block but not initialized (Temporal Dead Zone) |
| `const`  | Hoisted to the top of its block but not initialized (Temporal Dead Zone) |

### Data Types

| Type      | Description | Example |
|:----------|:------------|:--------|
| Number    | Numeric data type | `let age = 25;` |
| String    | Textual data type | `let name = "John";` |
| Boolean   | Logical data type | `let isStudent = true;` |
| Undefined | Variable declared but not assigned a value | `let x;` |
| Null      | Intentional absence of any object value | `let empty = null;` |
| Symbol    | Unique identifier | `let id = Symbol('id');` |
| BigInt    | Integer values larger than 2^53 - 1 | `let bigNumber = 1234567890123456789012345678901234567890n;` |

### Objects and Arrays

| Type   | Description | Example |
|:-------|:------------|:--------|
| Object | Collection of key-value pairs | `let person = {name: "Alice", age: 30};` |
| Array  | Ordered list of values | `let colors = ["red", "green", "blue"];` |

### Type Coercion

| Operation | Description | Example |
|:----------|:------------|:--------|
| Implicit  | Automatic type conversion | `"5" + 3` results in `"53"` |
| Explicit  | Manual type conversion | `Number("5")` results in `5` |

### Variable Naming Conventions

| Convention | Description | Example |
|:-----------|:------------|:--------|
| camelCase  | First word lowercase, subsequent words capitalized | `let firstName = "John";` |
| PascalCase | Each word capitalized (typically used for classes) | `class Person {}` |
| snake_case | Words separated by underscores | `let user_age = 25;` |
| UPPERCASE  | All capital letters (typically used for constants) | `const MAX_SIZE = 100;` |

### Best Practices

- Use `const` by default, and only use `let` if rebinding is needed.
- Avoid using `var` in modern JavaScript.
- Choose meaningful and descriptive variable names.
- Use camelCase for variable and function names.
- Use PascalCase for class names.
- Use UPPERCASE for constants.
- Declare variables at the top of their scope.
- Avoid global variables when possible.