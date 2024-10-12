import math

print(math.sqrt(4))

def hypothenuse(opposite,adjacent):
    return math.sqrt(opposite * opposite + adjacent * adjacent)

def others(hypothenuse,second):
    return math.sqrt(hypothenuse * hypothenuse - second * second)

