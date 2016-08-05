import string
import random
pas= int(input("Introduceti numarul de caractere ale parolei: "))
chars = string.ascii_letters + string.digits + string.punctuation+string.ascii_lowercase+string.ascii_uppercase



print (''.join((random.choice(chars)) for x in range(pas)))