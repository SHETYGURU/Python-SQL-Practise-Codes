# def find_common_ele(arr1,arr2):
#     result=[]
#     for i in arr1:
#         if i in arr2:
#             if i not in result:
#                 result.append(i)
#     return result

# print(find_common_ele([1,2,3,4,1,5,6],[1,2,1,4,5,3,8,9,10]))


# def find_common_ele(arr1,arr2):                   #good one because set uses hashing to directly jump to the value
#     arr2=set(arr2)
#     result=[]
#     for i in arr1:
#         if i in arr2 and i not in result:
#             result.append(i)

#     return result

# print(find_common_ele([1,2,3,4,1,5,6],[1,2,1,4,5,3,8,9,10]))



def find_common_ele(arr1,arr2):
    # arr2=set(arr2)
    result=[]
    for i in arr1:
        if i in arr2 and i not in result:
            result.append(i)

    return result

print(find_common_ele([1,2,3,4,1,5,6],[1,2,1,4,5,3,8,9,10]))
