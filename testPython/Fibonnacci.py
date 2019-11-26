#!/usr/bin/python
import time

a, b = 0, 1
i = 0

def Fibonnacci(a, b):
    print('Fibonnacci aime Fibonnacci sur... ', i)
    time.sleep(.200)
    print(a)

while True:
    Fibonnacci(a, b)
    a, b = b, a+b
    i += 1
