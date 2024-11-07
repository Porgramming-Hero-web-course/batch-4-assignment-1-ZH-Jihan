

function getProperty <T, Y extends keyof T>(object : T, key:Y){
    return object[key]
}

/* T is a generic type parameter representing the key property names of the object. 
The constraint Y extends keyof T ensures that Y is a valid key of T.
That mens property must exist on the object.
*/

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));