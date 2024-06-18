//In case of variables, type defining is not that necessary 
// but in case of fucntions it is ! Becuase it takes the argument 
// as any and is able to perform string operations on a  number


// Error :

let number = 5; 
number.toUpperCase();


// Wrong but no Error: because argument "val" is of type any here

function getUpper(val){
    return val.toUpperCase();
}
getUpper(5);

//HOW TO DEFINE FUNCTION:

function signUpUser(name: string, email: string, isPaid:boolean){
    return name;
}
//HOW NOT TO CALL A FUNCTION
signUpUser(1,2,3);

//HOW TO CALL
signUpUser("a","b",false);

//WE CAN SET INTIAL VALUES IN THAT CASE WE NEED TO WRITE IT COMPULSARILY
function loginUser(name: string, email: string, isPaid:boolean =false){
    return name;
}
loginUser("h", "h@h.com");

//RETURN VALUE'S DATA TYPE SHOULD MATCH RETURN DATA TYPE
function addtwo(num: number): number{
    return "hello";
}

//WE WOULD LEARN HOW TO HANDLE MANY RETURN DATA TYPE AT ONCE
//LIKE HERE WE NEED TO RETURN EITHER BOOLEAN OR STRING 

function getOutput(val: number) :boolean{
    if(val>10){
        return true;
    }
    return "200K";
}

//ARROW FUNCTION

const getHello = (s:string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero:string)=>{
    return 'hero is ${hero}'
})

//We dont need to explicity tell that hero is string, typescript is smart
heros.map((hero)=>{
    return 'hero is ${hero}'
})

//We can also return something else as well even if hero is a string
heros.map((hero)=>{
    return 1
})

//But sometimes we might need to tell explicity thqat we should be the return value
heros.map((hero):string=>{
    return 'hero is ${hero}'
})

//If you know that function doesn't return anything 
//then give the return type as void 

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

//and when function should NEVER return nothing 
// this data type more used with error handling
//forceful termination of the program
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}