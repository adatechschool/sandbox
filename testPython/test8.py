string = "bonjour les copains"
tab = string.split()
l = 0
for x in range(len(tab)):
    tab[x] = len(tab[x])
l = min(tab)
print(l)
exit()
x = 1000
for i in range(len(tab)):
    if tab[i] < x:
        l = tab[i]
print(l)
