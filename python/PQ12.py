# 12. Given a dictionary of employee names and salaries, find the employee with the highest salary.
employees = {
    "Alice": 50000,
    "Bob": 75000,
    "Charlie": 62000,
    "David": 88000,
    "Eva": 71000
}

def highest_sal(employees):
    return max(employees,key=employees.get)

print(highest_sal(employees))