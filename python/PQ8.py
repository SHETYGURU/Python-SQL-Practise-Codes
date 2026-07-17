# def second_larg_Distnct(arr):
#     arr=list(set(arr))
#     arr.sort()
#     return arr[-2]

# print(second_larg_Distnct([1,2,4,3,5,6,7,8,9,3,10,11,2]))

# def second_larg_Distnct(arr):
#     arr=list(set(arr))
#     arr.sort(reverse=True)
#     return arr[2]

# print(second_larg_Distnct([1,2,4,3,5,6,7,8,9,3,10,11,2]))

def second_larg_Distnct(arr):
    return sorted(set(arr))[-2]

print(second_larg_Distnct([1,2,4,3,5,6,7,8,9,3,10,11,2]))