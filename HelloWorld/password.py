pas = int(input("Introduceti numarul de caractere ale parolei: "))
def generator():
    x = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`@#$%^&*()_+][\;,./{}|:?><"

    parola = ""

    for i in range(pas):
        a = random.randrange(len(x))
        parola = parola + x[a]
    return parola
print (generator())
