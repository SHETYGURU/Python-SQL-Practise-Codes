# def count_char():
#     count=0
#     str=input()

#     for i in str:
#         if str!=" ":
#             count+=1
#     print("Total Frequency of words in  ",str,"is : ",count)

# count_char()

# def freq_char(str):
#     freq={}
#     for i in str:
#         if i in freq:
#             freq[i]+=1
#         else:
#             freq[i]=1

#     return freq

# print(freq_char("Gururaj"))


def freq_char(strng):
    freq={}
    for i in strng:
        freq[i]= freq.get(i,0)+1
    
    return freq

print(freq_char("Gururaj"))
