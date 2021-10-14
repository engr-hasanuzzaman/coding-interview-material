### what is the difference between `Object.create(null)` and `{}`? 
### what is the difference between `''[]` and `''.charAt(0)`? 
### what is the difference named and default export ?
- name import will get the update value but default will not 

### what will be the output of the following line of code?
```js
for(var i = 1; i < 5; i++) {
 setTimeout(() => {
   console.log(i);
 }, 0)
}
 
console.log(5);
```

### what will be the output of the following line of code?
```js
var obj = {
  printAge: function() {
    console.log(`The age is ${this.age}`);
  },
  age: 20
}

var age = obj.printAge;
age();
```

### what will be the output of the following line of code?
```js
var objPrototype = {};
console.log(objPrototype.toString());
var nullPrototype = Object.create(null);
console.log(nullPrototype.toString());
```

### what will be the output of the following line of code?
```js
printName();
printAge();

var name = "JT";
var age = '24';

function printName() {
  console.log(`The name ${name}`);
}

const printAge = () => {
  console.log(age);
}
```

### what will be the output of the following line of code?
```js
const obj1 = { 
  name: 'name1',
  address: { city: "Dhaka" }
}
const obj2 = {...obj1};
obj2.name = "name2";
obj2.address.city = "Bogra";
console.log(obj1);
```