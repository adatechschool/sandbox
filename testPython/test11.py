def persistence(n):
    res = 1
    count = 0
    tab = list(str(n))
    while len(str(n)) > 1:
        for i in range(len(tab)):
            res *= int(tab[i])
        n = res
        print(n)
        tab = list(str(n))
        count += 1
        res = 1
    return count

print(persistence(39))
persistence(39)
