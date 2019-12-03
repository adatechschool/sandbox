from functools import reduce

def create_phone_number(n):
    string = "("
    for i in range(3):
        string += str(n[i])
    for i in range(3, 4):
        string += ") " 
        string += str(n[i])
    for i in range(4, 6):
        string += str(n[i])
    for i in range(6, 7):
        string += "-" 
        string += str(n[i])
    for i in range(7, 10):
        string += str(n[i])
    return string

def create_phone2(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)

def create_phone3(n):
    n = ''.join(map(str, n))
    return "(%s) %s-%s"%(n[:3], n[3:6], n[6:])

def create_phone4(n):
    return "(%i%i%i) %i%i%i-%i%i%i%i" % tuple(n)

def create_phone5(n):
    return reduce( lambda a,c: a.replace('x', c, 1), list(map(str, n)), "(xxx) xxx-xxxx") 

def asc_value(n):
    return ord(str(n))

def get_ascii(n):
    return list(map(asc_value, n))

tab = [1, 4, 5, 8, 9, 9, 4, 4, 7, 0]
print(create_phone_number(tab))
print(create_phone2(tab))
print(create_phone3(tab))
print(create_phone4(tab))
print(create_phone5(tab))
print(get_ascii(tab))
