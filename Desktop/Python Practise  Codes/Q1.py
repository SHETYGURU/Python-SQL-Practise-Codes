def count_char():
    count=0
    str=input()

    for i in str:
        if str!=" ":
            count+=1
    print("Total Frequency of words in  ",str,"is : ",count)

count_char()