# 15. Given a list of employee records (Name, Department), group employees by department using a dictionary.

employees = [
    ("Alice", "HR"),
    ("Bob", "Finance"),
    ("Charlie", "IT"),
    ("David", "HR"),
    ("Eva", "IT"),
    ("Frank", "Marketing"),
    ("Grace", "Finance"),
    ("Helen", "IT")
]

def list_dict(lst):
    dict ={}
    for name,dept in lst:
        if dept not in dict:
            dict[dept]=[]
        dict[dept].append(name)
    return dict

print(list_dict(employees))