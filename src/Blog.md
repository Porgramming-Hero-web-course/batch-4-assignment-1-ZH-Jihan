Explain Union and Intersection Types in TypeScript.
Union and intersection types are powerful tools for combining multiple types, 
offering more flexibility and precision in my code.
 1. Union Types.
    A union type allows a variable to hold value of multiple types. 
    It is defined using | (pipe) symbol between two types.For exp, if you have a 
    function that can accept string or a number, you can use a union type to express
    that.
    Like this-  function userID (id: string | number) : number | string {
                    console.log(id);
                }

   Use Cases for Union Types: 
   1. Handling Multiple Input Types.
   2. Optional and Default Values.
   3. Error Handling.

 2. Intersection Types.
    Intersection type allows you to combine multiple types into one. A variable of 
    an intersection type must satisfy all the requirements of the intersected types.
    It is defined using & (ampersand) symbol between two types.
    Like this- 
     interface Person {
        name: string;
        age: number;
    }

    interface Employee {
        id: number;
        section: string;
        salary: number;
    }
    
    type EmployeePerson = Person & Employee;

