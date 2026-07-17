def rearrange_zeros(arr):
    # arr.list()
    result=[]
    for i in arr:
        if i!=0:
            result.append(i)

    while len(result)<= len(arr):
        result.append(0)
    return result



print(rearrange_zeros([1, 0, 2, 3, 0, 5, 2, 3, 4]))
