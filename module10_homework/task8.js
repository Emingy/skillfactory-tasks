let fruits = new Map([

  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry",    "blue"]

]);
for (let name of fruits.entries()) {

  console.log('Ключ — '+name[0]+', значение — '+name[1]);

}