//UNION

let score : number | string;
score =55;
score="no"

/*****/

let seat : 'aisle' | 'middle' | 'window'
seat='aisle';
seat='crew'; //it gives error


/*****/

type Intern = {
    In_name: string;
    emp_id: number;
}

type Developer={
    Dev_name: string;
    emp_id: number;
}

let Hardik: Intern|Developer;
Hardik = {In_name: "Hardik", emp_id:546} //Hardik is a Intern
Hardik = {Dev_name:"Hardik", emp_id:546} //Hardik has become a Developer now


/*******/

function getDbId(id:number|string){
    //make some API Calls
    console.log(`Id is ${id}`);
}
getDbId(3);
getDbId("3");



function getDbId2(id:number|string){
    id.toLowerCase(); //error because we are not sure that id is string, what if it is a number ?
}



function getDbId3(id:number|string){
    if(typeof id === "string"){
        id.toUpperCase();
    }
    else{
        id=id+2;
    }
}



/*******/





