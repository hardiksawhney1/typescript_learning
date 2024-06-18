//TUPLES

// Array with a specific order of mix data type
// or
// Array with a specified number of items

let tUser: [string,number,boolean]
tUser = [true,"t",1];
tUser = ["t",1,true]

//Can fetch data like an array and reassign values
tUser[2] = false;

let rgb : [number,number,number];
rgb = [255,255,255,255,2555];
rgb = [255,255,255];


//LOOPHOLES: But we can push pop shift unshift all these operations work and can damage the type 
rgb.push(255);