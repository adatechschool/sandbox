def accum(s):
    string = ""
    for x in range(len(s)):
        string += s[x].upper()
        for y in range(x):
            string += s[x].lower()
        if x < len(s) - 1:
            string += "-"
    print(string)
    return string

accum("bonjour")
