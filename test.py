def two_sum(nums, target):
    # Create an empty hash map
    hashmap = {}

    # Iterate over the array
    for i, x in enumerate(nums):
        # Check if target - x is in the hash map
        if target - x in hashmap:
            # If it is, we have found a pair of elements that add up to the target
            return [hashmap[target - x], i]
        # If target - x is not in the hash map, add x to the hash map with its index as the key
        hashmap[x] = i

    # If no pair of elements add up to the target, return an empty list
    return []

print(two_sum([2, 7, 11, 15], 9))  # Expected output: [0, 1]
print(two_sum([3, 2, 4], 6))  # Expected output: [1, 2]
print(two_sum([3, 3], 6))  # Expected output: [0, 1]
print(two_sum([1, 2, 3, 4], 10))  # Expected output: []



