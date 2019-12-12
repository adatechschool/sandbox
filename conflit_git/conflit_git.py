food = input("Enter your favourite food: ")
print("Your favourite food is: {}".format(food))

if food == 'pomme':
  print ("Comme Chirac!")

try:
    food = float(food)
    print(food)
except:
    print("A string cant be cast to an int/float....")
