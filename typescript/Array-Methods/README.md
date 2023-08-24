## Array Methods

This README provides an overview of various array methods and how to work with objects using interfaces and types in TypeScript.

### `push` Method

**Functionality:**
The `push` method adds one or more elements to the end of an array.

**Return Value:**
It returns the new length of the array after adding the elements.

**Changes Original Array:**
Yes, the original array is modified by adding elements to the end.

**Example:**

    ```typescript
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

### `shift` Method

**Functionality:**
The `shift` method removes the first element from the beginning of an array.

**Return Value:**
It returns the removed element.

**Changes Original Array:**
Yes, the original array is modified by removing the first element.

### `unshift` Method

**Functionality:**
The `unshift` method adds one or more elements to the beginning of an array.

**Return Value:**
It returns the new length of the array after adding the elements.

**Changes Original Array:**
Yes, the original array is modified by adding elements to the beginning.

### `splice` Method

**Functionality:**
The `splice` method can add and/or remove elements from an array at a specified index.

**Return Value:**
It returns an array containing the removed elements, or an empty array if no elements were removed.

**Changes Original Array:**
Yes, the original array can be modified by adding or removing elements.

```

```
