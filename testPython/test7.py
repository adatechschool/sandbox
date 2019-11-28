def spin_words(sentence):
    string = ""
    tab = sentence.split()
    for x in range(len(tab)):
        if len(tab[x]) < 5:
            tab[x] = tab[x]
        else:
            tab[x] ="".join(reversed(tab[x]))
    for y in range(len(tab)):
        string += tab[y]
        string += " "
    print(string)
    
spin_words("bonjour les copains")
