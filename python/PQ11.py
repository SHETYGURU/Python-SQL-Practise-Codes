# 11. Given a paragraph, count the frequency of every word using a dictionary.
def freq(para):
    freq={}
    for char in para:
        if char==" ":
            continue
        freq[char]= freq.get(char,0)+1
    return freq

print(freq("Python is a powerful programming language. Python is easy to learn and Python is widely used for web development, data analysis, artificial intelligence, and automation. Learning Python helps students build useful programming skills."))