
type Person = {
    name: string;
    age: number;
    email: string;
    address?:string;
}
function validateKeys<T extends object > (obj : T, keys: (keyof T)[]): boolean {
    const listOfobjectKeys = Object.keys(obj) as (keyof T)[];
    return keys.every(key => listOfobjectKeys.indexOf(key) !== -1); // help from google and chatGpt only for this line.
}

const persoN : Person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(persoN, ["name", "age"]));