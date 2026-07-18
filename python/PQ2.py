# 2. Given a string, find the first non-repeating character.
# def non_repeating_cahr(str):
   
#     freq={}
#     for i in str:
#         if i in freq:
#             freq[i]+=1
#         else:
#             freq[i]=1

    
#     for x in freq:
#         if freq[x]==1:
#             return  x
#     return None
        
# print(non_repeating_cahr("Gururaj"))


def non_repeating__char(strng):
    freq={}
    for i in strng:
        freq[i]= freq.get(i,0)+1
    
    for i in strng:             # not freq because we need to preserve the order of characters in strng
        if freq[i]==1:
            return i
    return None

print(non_repeating__char("uGururaj"))