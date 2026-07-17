# def anagram(strng1,strng2):
#     freq1={}
#     freq2={}

#     if len(strng1) != len(strng2):
#         return False
    
#     for char in strng1:
#         freq1[char] = freq1.get(char,0)+1
    
#     for char in strng2:
#         freq2[char] = freq2.get(char,0)+1
    
#     if freq1==freq2:
#         return True
#     else:
#         return False

# print(anagram("silent","listen"))


def anagram(strng1,strng2):
    freq={}

    if len(strng1)!= len(strng2):
        return False
    
    for char in strng1:
        freq[char]= freq.get(char,0)+1
    
    for char in strng2:
        if char not in  freq:
            return False
        else:
            freq[char]-=1
        
        if freq[char]<0:
            return False        
    return True

print(anagram("silent","listen"))