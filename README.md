# Spread Syntax Demo

Learn and practice JavaScript's spread operator (`...`) through practical examples.

---

## What is Spread Syntax?

The spread operator (`...`) expands arrays and objects into individual elements. It's a cleaner way to work with data in JavaScript.

---

## What This Code Does

### Task 1: Function Arguments
Passes array elements as separate arguments to a function.
```javascript
sum(...[1, 50, 99])  // Same as: sum(1, 50, 99)
// Output: 150
```

### Task 2: Merge Arrays
Combines two arrays into one.
```javascript
[...array1, ...array2]
// Output: [1, 2, 3, 4, 5, 6]
```

### Task 3: Insert Elements
Adds elements at any position in an array.
```javascript
['yellow', ...colors, 'purple']
// Output: ['yellow', 'red', 'green', 'blue', 'purple']
```

### Task 4: Copy Objects
Creates a copy of an object that can be modified independently.
```javascript
const newPerson = {...person}
// Changes to newPerson don't affect person
```

### Task 5: Merge Objects
Combines properties from multiple objects.
```javascript
{...object1, ...object2}
// Output: { a: 1, b: 3, c: 4 }
```

---

## How to Run
```bash
node spread-syntax.js
```

---

## Important Notes

**Shallow Copy Warning**: Spread only copies the top level. Nested objects are still connected to the original.
```javascript
const copy = {...original};
copy.nested.value = 'changed';  // This changes original too!
```

---

## 📚 Key Takeaways

✅ Cleaner syntax than old methods  
✅ Creates new arrays/objects (doesn't modify originals)  
✅ Works with arrays, objects, and function calls  
⚠️ Only makes shallow copies

---

## 🎓 Course Info

**Course:** AD311 - Intermediate Development  
**Week:** 2  
**Topic:** ES6 Spread Syntax

---

Made with ❤️ for learning JavaScript