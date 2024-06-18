//ENUMS

enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

const mySeat = SeatChoice.AISLE;

//by deafult value of AISLE will be 0 and then increases, middle =1, window = 2;

//we can define ournumbers like
//instead of "AISLE" we can write "AISLE=10"
//now AISLE value is 10, now we can define different values for every seatChoice,
//if we dont do so then MIDDLE will get 11 automatically and then increasing,

//Instaed of "AISLE" we can also write "(AISLE = "seat one")"
//not in brackets, they are just written in above to differentiate the commas
//we will have a string value but then once we define a string, we have to define values for all
//if we define MIDDLE=3, then after that error is gone and next numbers will have a increasing value


// when this above code is transcripted to javascript 
// it is a complex code 
//so to generate only required thing
//use keyword const before enum

