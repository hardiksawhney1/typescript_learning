//ARRAYS

const superHeros = [] //can't push value in this as its data type is never
const heroPower : [] = [] //can't push in this as it is of type empty array & should remain empty always

const power: string[] = []; //one way to define
const power2: Array<string> = []; //second way

power.push("a")
power2.push("a")
//both ways are correct and efficient 

//we can also create arrays of user-defined data types

//mixed datatype:
const data:(string|number)[] = [1,"2"];

//ARRAYS OF ARRAY

const MLModels: number[][] = [
    [255,255,255],
    [255,26]
]
