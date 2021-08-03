# Learning notes and list of problems to practice recursion
### Binary search
### Write power function with recursion
### Q. Write a recursive function that, given a number  n, returns the sum of the digits of the number n.
```python
def sumOFDigit(n):
  if n < 10:
    return n
  
  digit = n % 10
  return digit + sumOFDigit(n // 10)

print(sumOFDigit(3999));
```

## Resouces
- https://www.geeksforgeeks.org/recursion-practice-problems-solutions/
- https://www.youtube.com/watch?v=gl3emqCuueQ&list=PLFE6E58F856038C69&index=10

