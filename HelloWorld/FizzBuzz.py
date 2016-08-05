max= int(input("Introduceti un numar: "))
x=1
while x<max:
    if x%3 ==0 and x%5 ==0:
        print ("FizzBuzz")
    elif x%5 ==0:
        print ("Buzz")
    elif x%3 ==0:
        print ("Fizz")
    else:
        print (x)
    x=x+1
