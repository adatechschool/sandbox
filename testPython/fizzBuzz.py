import unittest

def fizzbuzz(nombre):

    if i%3 == 0 and i%5 == 0:
        print ("fizzbuzz")

    elif i%3 == 0:
        print ("fizz")

    elif i%5 == 0:
       print ("buzz")
    
    else:
        print i

for i in range (100):
    fizzbuzz(i)
