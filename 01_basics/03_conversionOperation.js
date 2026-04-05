let score =null

console.log(typeof score);

let valueInInterger = Number(score) //conversion 
console.log(valueInInterger); //Nan-- Not an number
console.log(typeof valueInInterger);


// "33" => 33 
// "33abc" => NaN (type is number but value is not a number)
//true = 1 ; false = 0
//null => 0
//undefined = NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
 
console.log(booleanIsLoggedIn);


// 1 = true ; 0 = false
// "" = false -- empty string 
// "raaj" = true  

let someNumber= 18

let StringNumber = String(someNumber)

console.log(StringNumber);
console.log(typeof StringNumber);

// 18 in string is  "18"