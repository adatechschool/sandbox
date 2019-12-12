food = input("Entrez votre nourriture favorite : ")

print("Votre nourriture favorite est : {}".format(food))

if food == 'pomme':
  print ("Comme Chirac !")

try:
    food = float(food)
    print(food)
except:
    print("Une chaine ne peut être convertie en entier ou flottant…")


