#!/usr/bin/python
import time
tab = ['un', "jour", "je", "serais", "le", "meilleur", "dresseur"]
tab += ["je", "me", "batterais", "sans", "répit"]

for i in range(len(tab) + 1):
    for a in range (i):
        print(tab[a])
        time.sleep(.300)
    print("----------------------")
