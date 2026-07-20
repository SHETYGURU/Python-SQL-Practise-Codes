# 16. Implement the Two Sum problem using a dictionary and return the indices of the two numbers whose sum equals the target.


def two_sum(nums,num):
    dict={}
    for i,value in enumerate(nums):         #to get value and index value
        remains= num-value

        if remains in dict:
            return [dict[remains],i]
        
        dict[value]=i
    return []

nums = [2, 7, 11, 15]
target = 9

print(two_sum(nums,target))
        



