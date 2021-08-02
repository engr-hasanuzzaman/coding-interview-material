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

### Q. Write a recursive function that, given a string s, prints the characters of s in reverse order.
```python
def revStr(str):
  if len(str) <= 1:
    return str;

  return str[-1] + revStr(str[:-1])
```

## Resouces
- https://www.geeksforgeeks.org/recursion-practice-problems-solutions/
- https://www.youtube.com/watch?v=gl3emqCuueQ&list=PLFE6E58F856038C69&index=10

