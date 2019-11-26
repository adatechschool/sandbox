#!/usr/bin/python

print ("attrapez les tous")

def lasuperfonction (a, b, c):
    print ("001 = bulbizarre, 1245 = {{}}, 000 = {}".format(a, b, c))
    print a
    print b
    print c

print ("et voila")

lasuperfonction ("13", 21, "vingt-et-un")

class SuperClasse:
    def __init__(self):
        print("SuperConstructeur")

    def lafonctionpourrie (self, x):
        print ("voila la valeur de ta variable enculé")
        print x

SuperObjet = SuperClasse()

SuperObjet.lafonctionpourrie("jonquilles")
