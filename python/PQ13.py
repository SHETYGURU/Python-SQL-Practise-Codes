# 13. Given two dictionaries, merge them. If a key exists in both dictionaries, add their values.



# Dictionary Methods
# get(key)                  # Returns the value of the given key. Returns None (or a default value) if the key is not found.
# keys()                    # Returns all keys in the dictionary.
# values()                  # Returns all values in the dictionary.
# items()                   # Returns all key-value pairs as tuples.
# update(other_dict)        # Adds or updates key-value pairs from another dictionary.
# pop(key)                  # Removes the specified key and returns its value.
# popitem()                 # Removes and returns the last inserted key-value pair.
# clear()                   # Removes all items from the dictionary.
# copy()                    # Returns a shallow copy of the dictionary.
# setdefault(key, value)    # Returns the value of the key; if absent, inserts the key with the given value.
# fromkeys(keys, value)     # Creates a new dictionary with the given keys and a common value.


# # Built-in Functions
# len(dict)                 # Returns the number of key-value pairs.
# max(dict)                 # Returns the largest key.
# min(dict)                 # Returns the smallest key.
# sum(dict.values())        # Returns the sum of all values.
# sorted(dict)              # Returns a sorted list of keys.
# list(dict)                # Converts dictionary keys into a list.
# dict()                    # Creates a new dictionary.
# type(dict)                # Returns the type of the object.


dict1 = {
    "apple": 10,
    "banana": 20,
    "orange": 15,
    "grapes": 25
}

dict2 = {
    "banana": 30,
    "orange": 10,
    "mango": 40,
    "apple": 5
}


def combined_dicts(dict1,dict2):
    result_dict=dict1.copy()

    for key,value in dict2.items():

        if key in result_dict:
            result_dict[key]+= value
        else:
            result_dict[key]=value
        
    print(result_dict.items())


    return result_dict

print(combined_dicts(dict1,dict2))
        

