# Array Methods

This README provides an overview of various array methods and how to work with objects using interfaces and types in TypeScript.

### `push` Method

**Functionality:**
The `push` method adds one or more elements to the end of an array.

**Return Value:**
It returns the new length of the array after adding the elements.

**Changes Original Array:**
Yes, the original array is modified by adding elements to the end.

**Parameters**:
The elements you want to add to the array having same data type as of array.

**Example:**

```
    const numbers = [1, 2, 3];
    const returnedValue = numbers.push(4, 5);
    // Result: numbers = [1, 2, 3, 4, 5], returnedValue = 5
```

### `pop` Method

**Functionality:**
The `pop` method removes the last element from the end of an array.

**Return Value:**
It returns the removed element.

**Changes Original Array:**
Yes, the original array is modified by removing the last element.
**Example:**

```
    const numbers = [1, 2, 3];
    const removedElement = numbers.pop();
    // Result: numbers = [1, 2], removedElement = 3
```

### `shift` Method

**Functionality:**
The `shift` method removes the first element from the beginning of an array.

**Return Value:**
It returns the removed element.

**Changes Original Array:**
Yes, the original array is modified by removing the first element.
**Example:**

```
    const fruits = ["apple", "banana", "cherry"];
    const removedFruit = fruits.shift();
    // Result: fruits = ["banana", "cherry"], removedFruit = "apple"
```

### `unshift` Method

**Functionality:**
The `unshift` method adds one or more elements to the beginning of an array.

**Return Value:**
It returns the new length of the array after adding the elements.

**Changes Original Array:**
Yes, the original array is modified by adding elements to the beginning.

**Parameters**:
The elements you want to add to the array having same data type as of array.

**Example:**

```
    const colors = ["blue", "green"];
   const returnedValue = colors.unshift("red", "yellow");
    // Result: colors = ["red", "yellow", "blue", "green"] , returnedValue = 4
```

### `splice` Method

**Functionality:**
The `splice` method can add and/or remove elements from an array at a specified index.

**Return Value:**
It returns an array containing the removed elements, or an empty array if no elements were removed.

**Changes Original Array:**
Yes, the original array can be modified by adding or removing elements.

```
const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(1, 2, 6, 7);
// Result: numbers = [1, 6, 7, 4, 5], removed = [2, 3]

```

### `slice` Method

**Functionality:**
The `slice` method creates a new array by extracting a portion of an existing array. It does not modify the original array.

**Return Value:**
It returns a new array containing the extracted elements.

**Changes Original Array:**
No, the original array remains unchanged when using the `slice` method.

**Example:**

```
const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 4);
// Result: numbers = [1, 2, 3, 4, 5], sliced = [2, 3, 4]
```

### `length` Property

**Functionality:**
The `length` property returns the number of elements in an array.

**Usage:**
You can access the `length` property of an array to get the total number of elements it contains.

**Example:**

```
const numbers = [1, 2, 3, 4, 5];
const count = numbers.length;
// Result: count = 5
```

**Changes Original Array**:
No, accessing the length property does not modify the original array.

### `sort` Method

**Functionality:**
The `sort` method sorts the elements of an array in place and returns the sorted array.

**Parameters:**
The `sort` method optionally accepts a compare function that defines the sort order.

**Return Value:**
It returns the sorted array.

**Changes Original Array:**
Yes, the original array is modified when using the `sort` method.

**Example:**

```
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
// Result: fruits = ["apple", "banana", "cherry"]
```

### `reverse` Method

**Functionality:**
The `reverse` method reverses the order of elements in an array in place and returns the reversed array.

**Return Value:**
It returns the reversed array.

**Changes Original Array:**
Yes, the original array is modified when using the `reverse` method.

**Example:**

```
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
// Result: numbers = [5, 4, 3, 2, 1]
```

### `find` Method

**Functionality:**
The `find` method returns the first element in an array that satisfies a given condition.

**Parameters:**
The `find` method accepts a callback function that tests each element of the array.

**Return Value:**
It returns the first element that matches the condition, or `undefined` if no element is found.

**Changes Original Array:**
No, the original array remains unchanged when using the `find` method.

**Example:**

```
const numbers = [10, 20, 30, 40, 50];
const target = numbers.find(num => num > 25);
// Result: numbers = [10, 20, 30, 40, 50], target = 30
```

### `includes` Method

**Functionality:**
The `includes` method checks whether an array includes a certain element and returns a boolean value.

**Parameters:**
The `includes` method takes the element to search for as its parameter.

**Return Value:**
It returns `true` if the element is found, otherwise `false`.

**Changes Original Array:**
No, the original array remains unchanged when using the `includes` method.

**Example:**

```
const fruits = ["apple", "banana", "cherry"];
const hasBanana = fruits.includes("banana");
// Result: hasBanana = true
```

### `indexOf` Method

**Functionality:**
The `indexOf` method searches for an element in an array and returns the first index at which the element is found.

**Parameters:**
The `indexOf` method takes the element to search for as its parameter.

**Return Value:**
It returns the index of the element if found, otherwise it returns -1.

**Changes Original Array:**
No, the original array remains unchanged when using the `indexOf` method.

**Example:**

```
const fruits = ["apple", "banana", "cherry"];
const bananaIndex = fruits.indexOf("banana");
// Result: bananaIndex = 1
```

## Method Loops

### `map` Method

**Functionality:**
The `map` method creates a new array by applying a transformation function to each element of the original array.

**Return Value:**
It returns a new array containing the transformed elements.

**Changes Original Array:**
No, the original array remains unchanged when using the `map` method.

**Parameters:**
The `map` method takes a single argument, which is a callback function that is applied to each element of the array.

**Example:**

```
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
// Result: numbers = [1, 2, 3], doubled = [2, 4, 6]
```

### `filter` Method

**Functionality**:
The filter method creates a new array containing elements that satisfy a given condition.

**Parameters**:
The filter method takes a single argument, which is a callback function that tests each element of the array.

**Return Value**:
It returns a new array containing the filtered elements.

**Changes Original Array**:
No, the original array remains unchanged when using the filter method.

**Example**:

```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => {
    if(num%2===0){
        return true
    }
});
// Result: numbers = [1, 2, 3, 4, 5], evenNumbers = [2, 4]
```

### `forEach` Method

**Functionality**:
The forEach method iterates over each element of an array and executes a provided function.

**Parameters**:
The forEach method takes a single argument, which is a callback function that is executed for each element.

**Return Value**:
It does not return a value; it is used for its side effects.

**Changes Original Array**:
No, the original array remains unchanged when using the forEach method.

**Example**:

```
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(`I love ${fruit}s!`));
// Result: (Logs "I love apples!", "I love bananas!", "I love cherries!")
```
