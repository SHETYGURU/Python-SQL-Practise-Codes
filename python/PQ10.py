# 10. Given two sorted lists, merge them into a single sorted list without using built-in sorting functions.


# def combine_sorted_lists(arr1,arr2):
#     return arr1+arr2

# print(combine_sorted_lists([1,2,3,4,5,6],[1,2,3,4,5,8,9,10]))


# def combine_sorted_lists(arr1,arr2):
#     result=arr1+arr2
#     result.sort()
#     return result
# print(combine_sorted_lists([1,2,3,4,5,6],[1,2,3,4,5,8,9,10]))

# def combine_sorted_lists(arr1,arr2):
#     result=arr1+arr2
#     result.sort()
#     return result
# print(combine_sorted_lists([1,2,3,4,5,6],[1,2,3,4,5,8,9,10]))

def combine_sorted_lists(arr1,arr2):
    result=[]
    i=j=0
    while i<len(arr1) and j<len(arr2):
        if arr1[i]<=arr2[j]:
            result.append(arr1[i])
            i+=1
        else:
            result.append(arr2[j])
            j+=1
    
    while i< len(arr1):
        result.append(arr1[i])
        i+=1
    
    while j< len(arr2):
        result.append(arr2[j])
        j+=1
    
    return result
        
print(combine_sorted_lists([1,2,3,4,5,6,8],[1,2,3,4,5,7,9,10]))