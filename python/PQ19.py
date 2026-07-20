# 19. Sort a list of employee records based on salary using a lambda function.

employees = [
    ("John", 50000),
    ("Alice", 70000),
    ("Bob", 45000),
    ("David", 60000)
]

# def sort_using_lambda(lst):
#     lst.sort(key=lambda emp:emp[1],reverse=True)
#     return lst

# print(sort_using_lambda(employees))
    
def sort_using_lambda(lst):
    result=sorted(lst,key=lambda emp:emp[1],reverse=True)
    return result

print(sort_using_lambda(employees))
