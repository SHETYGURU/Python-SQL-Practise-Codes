# 18. Find the top three most frequent words in a paragraph using `Counter`.

# # collections.Counter - Common Functions & Methods

# from collections import Counter

# # 1. Counter(iterable)
# # Creates a Counter by counting elements.
# c = Counter([1, 2, 2, 3, 3, 3])

# # 2. Counter(dictionary)
# # Creates a Counter from a dictionary.
# c = Counter({'a': 2, 'b': 3})

# # 3. counter[element]
# # Returns the count of an element (0 if not present).
# print(c['a'])

# # 4. keys()
# # Returns all unique elements.
# print(c.keys())

# # 5. values()
# # Returns all counts.
# print(c.values())

# # 6. items()
# # Returns (element, count) pairs.
# print(c.items())

# # 7. most_common()
# # Returns all elements sorted by frequency.
# print(c.most_common())

# # 8. most_common(n)
# # Returns the top n most frequent elements.
# print(c.most_common(2))

# # 9. update(iterable)
# # Adds counts from another iterable.
# c.update(['a', 'b', 'b'])
# print(c)

# # 10. subtract(iterable)
# # Subtracts counts from another iterable.
# c.subtract(['a', 'b'])
# print(c)

# # 11. clear()
# # Removes all elements.
# c.clear()
# print(c)

# # 12. copy()
# # Creates a copy of the Counter.
# c1 = Counter([1, 2, 2])
# c2 = c1.copy()
# print(c2)

# # 13. total()  (Python 3.10+)
# # Returns the sum of all counts.
# c = Counter([1, 2, 2, 3])
# print(c.total())

# # 14. elements()
# # Returns each element repeated according to its count.
# print(list(c.elements()))


from collections import Counter

def freq_Couter(strng):
    words= strng.lower().split()
    print("words=",words)
    counter = Counter(words)
    print("Counter= ",counter)
    return counter.most_common(3)

paragraph = "Python is easy Python is powerful Python is fun"

print(freq_Couter(paragraph))



