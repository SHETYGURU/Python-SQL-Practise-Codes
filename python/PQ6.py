# def remove_duplicates_int(strng):
#     strng=list(map(int,strng))
#     print(strng)
#     return "".join(map(str,dict.fromkeys(strng)))

# print(remove_duplicates_int("123564697523"))



def remove_duplicates_int(strng):
    strng=list(map(int,strng))
    print(strng)
    freq={}
    for i in strng:
        if i not in freq:
            freq[i]=1
    freq=list(freq)
    # return freq
    return "".join(map(str,freq))

print(remove_duplicates_int("123564697523"))




