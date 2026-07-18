# 14. Given a dictionary, invert its keys and values.

student = {
    "Alice": 101,
    "Bob": 102,
    "Charlie": 103,
    "David": 103
}

def invert_dict(dict):
    
    inverted_dict={}
    for key,value in dict.items():
        inverted_dict[value]=key
    
    return inverted_dict

print(invert_dict(student))

