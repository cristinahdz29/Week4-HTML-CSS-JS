//Create an app which determines whether the number is even or odd

//Step 1: CREATE A FUNCTION; FUNCTION WILL TAKE IN A PARAMETER BECAUSE WE CANT TAKE USER INPUT AT THIS POINT
//STEP 2: DETERMINE IF ITS EVEN, SO IF THE NUMBER THE USER INPUT DOES NOT HAVE A REMAINEDER WHEN USE % 2, THEN IT IS EVEN, IF IT IS NOT == TO 0 THEN IT IS ODD
//STEP 3: IF NUMBER IS ZERO OR NEGATIVE, THEN RETURN STRING STATING THAT ITS NOT EVEN OR ODD

let number = 0

function evenOdd(number) {
    if (number <=0) {
        return "This number is neither even nor odd"
    }
    if (number % 2 == 0) {
        return number + " is an even number"
    } else {
        return number + " is an odd number"
    }
}

console.log(evenOdd(number))