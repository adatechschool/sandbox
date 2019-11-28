def unique_in_order(iterable):
    tab = []
    if len(iterable) == 1:
        tab += iterable[0]
        return tab
    for x in range(len(iterable)):
        if ord(str(iterable[x])) > 47:
            if ord(str(iterable[x])) >= 48 and ord(str(iterable[x])) <= 57:
                if iterable[x] != iterable[x - 2]:
                    tab += str(iterable[x])
            elif iterable[x] != iterable[x - 1]:
                    tab += iterable[x]
    print(tab)
    return tab

unique_in_order([1,2,3,3])
