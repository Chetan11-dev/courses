More Array Methods.

# findIndex

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

---

For example to return the index of first Folded Hands emoji you can use

```
["🙏", "Jai", "Jinendra"].findIndex((element) => element === "🙏") // => 0
```

# concat

Combines two or more arrays. This method returns a new array without modifying any existing arrays.

---

For example to Combine Two String Arrays you can use

```
["🙏"].concat(["Jai", "Jinendra"]) // => ["🙏", "Jai", "Jinendra"]
```

# join

Adds all the elements of an array into a string, separated by the specified separator string.

---

For example to Convert elements of a string into a string seperated by spaces you can use

```
["🙏", "Jai", "Jinendra"].join(" ") // => "🙏 Jai Jinendra"
```

# some

Determines whether the specified callback function returns true for any element of an array.

---

For example to Determine whether there exisits a string that starts with "Jai" you can use

```
["🙏", "Jai", "Jinendra"].some((element) => element.startsWith("Jai")) // => true
```

# includes

Determines whether an array includes a certain element, returning true or false as appropriate.

---

For example to Determine whether an array has a folded hands emoji you can use:

```
["🙏", "Jai", "Jinendra"].includes("🙏") // => true
```

---

These were the commonly used array methods there also exist other methods such as reduceRight(which reduces starting from right side
of array) not covered here. If you are interested to know about them a google search will enable you to learn more about them.

Credits: Microsoft Documentation was used.
