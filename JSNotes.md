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

> [!TIP]
>
> - Use `const` by default, and only use `let` if rebinding is needed.
> - Avoid using `var` in modern JavaScript.
> - Choose meaningful and descriptive variable names.
> - Use camelCase for variable and function names.
> - Use PascalCase for class names.
> - Use UPPERCASE for constants.
> - Declare variables at the top of their scope.
> - Avoid global variables when possible.

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

### Creating Objects

| Method | Description | Example |
|:-------|:------------|:--------|
| Object literal | Create an object using curly braces | `let person = {name: "Alice", age: 30};` |

| Constructor function | Create an object using a function |

`function Person(name, age) { this.name = name; this.age = age; }`
`let person = new Person("Alice", 30);` |

| Object.create() | Create an object with a specified prototype |

```
`let personProto = {greet() { console.log("Hello!"); }}`
`let person = Object.create(personProto);`
```

### Accessing Object Properties

| Method | Description | Example |
|:-------|:------------|:--------|
| Dot notation | Access properties using a dot | `person.name` |
| Bracket notation | Access properties using brackets | `person["name"]` |

### Object Methods

| Method | Description |
|:-------|:------------|
| `Object.keys()` | Returns an array of a given object's own enumerable property names |
| `Object.values()` | Returns an array of a given object's own enumerable property values |
| `Object.entries()` | Returns an array of a given object's own enumerable string-keyed property [key, value] pairs |
| `Object.assign()` | Copies the values of all enumerable own properties from one or more source objects to a target object |
| `Object.freeze()` | Freezes an object: prevents new properties from being added and existing properties from being removed or modified |
| `Object.seal()` | Seals an object: prevents new properties from being added and marks all existing properties as non-configurable |

### Prototypes and Inheritance

| Concept | Description |
|:--------|:------------|
| Prototype chain | Objects inherit properties and methods from their prototype |
| Constructor prototype | Add methods to all instances of a constructor |
| Class syntax | ES6 introduced class syntax as syntactic sugar over prototypes |

> [!TIP]
>
> - Use object literals for simple structures and classes for complex ones with methods.
> - Avoid modifying built-in object prototypes.
> - Use Object.create(null) for dictionary-style objects without prototypes.
> - Use const when declaring object variables to prevent reassignment

> [!Note]
> the object's properties can still be modified.

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

## Arrow Functions

Arrow functions provide a concise syntax for writing function expressions.

### Syntax

| Syntax | Description | Example |
|:-------|:------------|:--------|
| `() => {}` | Basic arrow function | `const greet = () => { console.log("Hello!"); }` |
| `param => {}` | Single parameter (parentheses optional) | `const square = x => { return x * x; }` |
| `(param1, param2) => {}` | Multiple parameters | `const add = (a, b) => { return a + b; }` |
| `() => expression` | Implicit return for single expressions | `const double = x => x * 2;` |

### Key Characteristics

| Feature | Description |
|:--------|:------------|
| Lexical `this` | Arrow functions do not bind their own `this`, instead inheriting it from the enclosing scope |
| No `arguments` object | Arrow functions do not have their own `arguments` object |
| Cannot be used as constructors | Arrow functions cannot be used with the `new` keyword |
| No `prototype` property | Arrow functions do not have a `prototype` property |

### Use Cases

| Scenario | Description |
|:---------|:------------|
| Callbacks | Concise syntax for short callback functions |
| Array methods | Clean syntax for methods like `map`, `filter`, and `reduce` |
| Short, single-expression functions | Implicit return for brief functions |

>[!TIP]
>
> - Use arrow functions for short, simple functions, especially callbacks.
> - Avoid arrow functions for object methods that need to access `this`.
> - Use traditional function syntax for complex functions or those that use `this` dynamically.
> - Be aware that arrow functions are always anonymous, but can be assigned to variables if needed.

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

## Array Methods

### .map()

The `.map()` method creates a new array with the results of calling a provided function on every element in the calling array.

| Aspect | Description |
|:-------|:------------|
| Syntax | `array.map(callback(currentValue[, index[, array]])[, thisArg])` |
| Return value | A new array with each element being the result of the callback function |
| Mutates original array? | No |

#### Parameters

| Parameter | Description |
|:----------|:------------|
| `callback` | Function that produces an element of the new array |
| `currentValue` | The current element being processed in the array |
| `index` (optional) | The index of the current element being processed in the array |
| `array` (optional) | The array `map` was called upon |
| `thisArg` (optional) | Value to use as `this` when executing callback |

#### Example Usage

| Basic Usage |

```
`const numbers = [1, 2, 3, 4];` 
`const doubled = numbers.map(num => num * 2);`
`// doubled is [2, 4, 6, 8]` |
```

| With index |

``` 
`const indexed = numbers.map((num, index) => ({ value: num, index: index }));`
`// indexed is [{ value: 1, index: 0 }, { value: 2, index: 1 }, ...]`
```

| Transforming objects |

```
`const persons = [{ name: 'John' }, { name: 'Jane' }];`
`const names = persons.map(person => person.name);`
`// names is ['John', 'Jane']` |
```

> [!TIP]
>
> - Use `.map()` when you want to transform each element in an array.
> - Always return a value from the callback function.
> - Avoid modifying the original array or performing side effects in the callback.
> - Consider using `.map()` with arrow functions for more concise syntax.

## Constructors

Constructors are special functions used to create and initialize objects in JavaScript.

### Basic Syntax

| Syntax | Description | Example |
|:-------|:------------|:--------|
| `function Constructor() {}` | Traditional function syntax | `function Person(name) { this.name = name; }` |
| `class Constructor {}` | ES6 class syntax | `class Person { constructor(name) { this.name = name; } }` |

### Key Characteristics

| Feature | Description |
|:--------|:------------|
| `new` keyword | Used to create instances of the constructor |
| `this` binding | Inside the constructor, `this` refers to the newly created instance |
| Capitalization | Constructor names are typically capitalized (convention) |
| Return value | Constructors implicitly return the new object instance |

### Example Usage

```
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.drive = function() {
    console.log(`Driving a ${this.make} ${this.model}`);
  };
}

const myCar = new Car('Toyota', 'Corolla');
myCar.drive(); // Outputs: Driving a Toyota Corolla

// ES6 Class Syntax
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  drive() {
    console.log(`Driving a ${this.make} ${this.model}`);
  }
}

const myCar = new Car('Honda', 'Civic');
myCar.drive(); // Outputs: Driving a Honda Civic
```

> [!TIP]
>
> - Use ES6 class syntax for cleaner, more intuitive object creation.
> - Always use the `new` keyword when invoking a constructor.
> - Capitalize constructor names to distinguish them from regular functions.
> - Use constructors to set up initial state and shared methods.
> - Avoid returning a value from the constructor (it will override the instance).
> - Consider using factory functions for more flexible object creation patterns.

> [!NOTE]
> The `class` syntax in JavaScript is syntactic sugar over the prototype-based inheritance model. It doesn't introduce a new object-oriented inheritance model.

## Classes

Classes in JavaScript provide a more structured and intuitive way to create objects and implement inheritance.

### Class Declaration

| Syntax | Description | Example |
|:-------|:------------|:--------|
| `class ClassName {}` | Basic class declaration | `class Person {}` |
| `class ClassName extends ParentClass {}` | Class with inheritance | `class Student extends Person {}` |

### Class Methods and Properties

| Feature | Description | Example |
|:--------|:------------|:--------|
| Constructor | Special method for creating and initializing objects | `constructor(name) { this.name = name; }` |
| Methods | Functions defined inside the class | `greet() { console.log('Hello!'); }` |
| Static Methods | Methods called on the class itself, not instances | `static create() { return new this(); }` |
| Getters/Setters | Special methods for getting/setting values | `get fullName() { return this._fullName; }` |

### Example Usage

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }

  static create(name) {
    return new this(name);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Outputs: Rex barks.

const animal = Animal.create('Generic Animal');
animal.speak(); // Outputs: Generic Animal makes a sound.
```

### Key Characteristics

| Feature | Description |
|:--------|:------------|
| Inheritance | Classes can inherit properties and methods from other classes |
| Encapsulation | Classes group related data and functionality together |
| Polymorphism | Subclasses can override methods from parent classes |
| Hoisting | Unlike function declarations, class declarations are not hoisted |

> [!TIP]
>
> - Use PascalCase for class names.
> - Keep classes focused on a single responsibility.
> - Use getters and setters for computed properties.
> - Prefer composition over inheritance for more flexible code.
> - Use `super()` in subclass constructors before accessing `this`.
> - Avoid creating too many levels of inheritance.

> [!NOTE]
>Classes in JavaScript are primarily syntactic sugar over the existing prototype-based inheritance. They do not introduce a new object-oriented inheritance model to the language.
