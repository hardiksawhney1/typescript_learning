// type Aliases : this is actually a user-defined data type 
// or we can define a primitive data type with a name and use it with new name

example:
type Mystring = string;

//or we can define own data type maybe a object if we want to use it at various places 

type User = {
    name: string;
    email: string; //or email: Mystring as we have defined it above
    isActive: boolean;
}

// below functions contains arguments and return type both of type User
function createUser(user: User): User{
    return {name:"", email:"", isActive: false}
}
createUser({name:"", email:"", isActive: false})


//We can create data type which is the mixer of two or more user defined or primitive data types

type cardNumber ={
    cardnumber: string
}
type cardDate = {
    cardDate : string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}
//now this works but this is not good method we should have made a different type of cvv as well 



//New user type
type User2 = {
    readonly _id: number;
    name: string;
    email: string; //or email: Mystring as we have defined it above
    isActive: boolean;
    creditCardDetails?: cardDetails;
}
//we dont know the user has filled card details or not this field is optional so ? is there


 
let myUser : User2 = {
    _id:1,
    name:"h",
    email:"h@h.com",
    isActive:false,
}
myUser.email="g@G.com";
// we can't change the value or reassign the value of readonly
myUser._id=3;











// but if there is an field which is readonly but it is an array then 
// we can't reassign it but we can push values to it !


// Define a type User3 with a readonly names array. The array reference is readonly, but its contents can still be modified.
type User3 = {
    readonly names: string[];
};

const user3: User3 = {
    names: ['Alice', 'Bob']
};

// This will throw an error because the array reference is readonly:
// user3.names = ['Charlie']; // Error: Cannot assign to 'names' because it is a read-only property.

// This is allowed because we're modifying the array's contents, not reassigning it:
user3.names.push('Charlie');
console.log(user3.names); // Output: ['Alice', 'Bob', 'Charlie']


// Define a type User4 with a readonly names array using ReadonlyArray. The array and its contents cannot be modified.
type User4 = {
    readonly names: ReadonlyArray<string>;
};

const user4: User4 = {
    names: ['Alice', 'Bob']
};

// These will throw errors because the array is a ReadonlyArray:
// user4.names.push('Charlie'); // Error: Property 'push' does not exist on type 'readonly string[]'.
// user4.names = ['Charlie']; // Error: Cannot assign to 'names' because it is a read-only property.

console.log(user4.names); // Output: ['Alice', 'Bob']


// Define a type User5 with a readonly names array, and provide a function to create the User5 object
// to ensure the original array cannot be modified after creation.
type User5 = {
    names: ReadonlyArray<string>;
};

function createUser5(names: string[]): User5 {
    return {
        names: [...names] // Copy the array to prevent external modifications
    };
}

const user5 = createUser5(['Alice', 'Bob']);

// These will throw errors because the array is a ReadonlyArray:
// user5.names.push('Charlie'); // Error: Property 'push' does not exist on type 'readonly string[]'.
// user5.names = ['Charlie']; // Error: Cannot assign to 'names' because it is a read-only property.

console.log(user5.names); // Output: ['Alice', 'Bob']



