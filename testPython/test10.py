from string import maketrans

pairs = {'A':'T', 'T':'A', 'C':'G', 'G':'C'}
def dna_strand(dna):
    return "".join([pairs[x] for x in dna])

def dna_strand_with_string(dna):
    return dna.translate(maketrans('ATCG', 'TAGC'))

chain = "CGTAAGCGTTTAGCAAAAGCTTACGATACGATACAATCAAGGCA"

print(dna_strand(chain))
print(dna_strand_with_string(chain))
