x= int(input("Introduceti numarul de elemente din sir: "))
sir=[1,1]

for a in range(1,x-1):
    sum=sir[a-1]+sir[a]
    sir.append(sum)
print (sir)