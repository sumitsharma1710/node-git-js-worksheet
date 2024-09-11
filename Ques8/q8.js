//  ================================ Some weird behaviours of javascript =================================

// 1. 
// there it changes to string and concat 2 with the srting 5 snd output 52 in side a string
console.log("5" + 2 === "52"); //return true

// there it changes string 5 into number and then perform the operation and give the output as number
console.log("5" - 2 === 3); //return true 

// 2. In javascript the objects reffered to a object on the same location if assigned to one another they just point to that location if vchange in one variable it will be reflected to both of them

let a = {'name' : 'Shiv'}
let b = a;
b.name = 'Sam';
console.log(a.name); //RETURN Sam



// 3. In the below example javascript behave weird due to the inability to represent certain decimal fractions precisely in binary.

console.log(0.2 + 0.1 === 0.3); //return false
console.log(0.2 + 0.1 == 0.3);  //return false