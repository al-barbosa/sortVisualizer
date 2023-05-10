test_list = [1, 23, 34, 57, 59, 66, 73, 87, 90, 92]

def binary_search(list, item = None):
    low = 0
    high = len(list) - 1
    while low <= high:
        middle = (low + high) // 2
        guess = list[middle]
        if guess == item:
            return print(middle)
        elif guess < item:
            low = middle + 1
        else:
            high = middle - 1
    return print(high, low)


binary_search(test_list, 1)