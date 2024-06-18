//Errors and errors
class cUser{
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
}

//typescript needs to know what is email and name before going into the constructor
class cUser2{
    email,
    name,
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
}
//still errors because data type should be defined
class cUser3{
    email:string
    name:string
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
}

//best practice is: 
class cUser4{
    email:string
    name:string
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }
}

const hardikh = new cUser4("h@h.com","hardy");


