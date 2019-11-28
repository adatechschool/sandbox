tab = []

def is_in_tab(char, tab):
    for x in range(len(tab)):
        if char == tab[x]:
            return True

def count_doubles(string, tab):
    count = 0
    for x in range(len(string)):
        for y in range((x + 1), len(string)):
            if string[x] == string[y] and not is_in_tab(string[x], tab):
                tab += string[x]
                count += 1
    print(tab)
    print(count)

phrase = input("tapez la phrase à vérifier ")
count_doubles(phrase, tab)
