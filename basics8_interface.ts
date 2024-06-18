interface inUser {
    readonly dbId: number,
    email:string,
    userId: number,
    googleId?:string,
    startTrail: () => string //First way to define a function with return type of string
    startMembership?():string //Second way to define a function with return type of string, question mark is added to make it optional
    getCoupon(couponname: string, value:number): number //we can pass functions with parameters

}

//reopening of interface : appending any new property 
//but type cannot be changed of previous added property in reopening
interface inUser{
    githubId: string
}

//inheritance 
interface Admin extends inUser{
    role: "admin" | "learner" | "ta"
}
const hardik: inUser = {dbId:22, email:"h@h.com", userId:2211,
    githubId: "h123",
    startTrail:() => {
        return "trail started"
    },
    getCoupon:(name:"hitesh10", off:10)=>{ //we can use different key names from what was defined in the interface
        //or even if i don't pass any or all paramters it doesn't give error naturally
        return 10
    }
}

const hardik2: Admin = {dbId:22, email:"h@h.com", userId:2211,
    githubId: "h123",
    role: "learner",
    startTrail:() => {
        return "trail started"
    },
    getCoupon:(name:"hitesh10", off:10)=>{ //we can use different key names from what was defined in the interface
        //or even if i don't pass any or all paramters it doesn't give error naturally
        return 10
    }
}