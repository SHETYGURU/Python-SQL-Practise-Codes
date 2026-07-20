# 17. Count the frequency of characters using `collections.Counter`.
from collections import Counter



# def freq_using_counter(strng):
#     counter= Counter(strng)
#     return counter

# print(freq_using_counter("avdlsjdgjbekjfjslkk"))


def freq_using_counter(strng):
    counter= Counter(x for x in strng if x!=' ')
    return counter

print(freq_using_counter("avdl sjdgjbe kjfjslkk"))
