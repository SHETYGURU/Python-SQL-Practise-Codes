# 5. Given a string, remove duplicate characters while preserving their first occurrence.
# def remove_duplicates(strng):
#     freq={}
#     for i in strng:
#         if i not in freq:
#             freq[i]=1
#     return "".join(freq.keys())

# print(remove_duplicates("Gururaj"))


# def remove_duplicates(strng):
#     return "".join(dict.fromkeys(strng))

# print(remove_duplicates("Gururaj"))


# def remove_duplicates(strng):             #no proper Order
#    return "".join(set(strng))

# print(remove_duplicates("Gururaj"))


def remove_duplicates(strng): 
    result=""
    seen=set()
    for char in strng:
        if char not in seen:
            seen.add(char)
            result+=char
    return "".join(result)

print(remove_duplicates("Gururaj"))