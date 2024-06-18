//Passing an object to a function 

function createUser({name: string, isPaid: boolean}){
}

createUser({name:"hitesh", isPaid:false});

//Returning a object
       
                     //(parameters):{curly brackets because return type is object} {these curly brackets for function defination}
function createCourse(courseName: string):{name: string, price: number}{
    return {name: courseName, price: 399}
}

createCourse("react");

//Typescript still has loopholes as in see

//Example 1: Entering email is not allowed as function doesn't has a paramter for it
function createUser2({name: string, isPaid: boolean}){
}

createUser2({name:"hitesh", isPaid:false, email: "h@h.com"});

//Example 2:We can cteate an object and pass it directly istead of writing object at the time of function call
function createUser3({name: string, isPaid: boolean}){
}
let newUser={
    name:"hitesh",
    isPaid:false
}
createUser3(newUser);

//Example3: now if we add email to that the object even if it is not passed on the function argument, it is still acceptable
function createUser4({name: string, isPaid: boolean}){
}
let newUser2={
    name:"hitesh",
    isPaid:false,
    email:"h@h.com"
}
createUser4(newUser2);