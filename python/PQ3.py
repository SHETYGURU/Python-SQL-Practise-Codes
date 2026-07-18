# 3. Given a string, return the character that appears the maximum number of times.
def max_freq_char(strng):
    freq={}

    for char in strng:
        freq[char] = freq.get(char,0)+1
    max_freq=max(freq,key=freq.get)
    return max_freq,freq[max_freq]

print(max_freq_char("uGururaj"))