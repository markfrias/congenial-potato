// List down two names
let name1 = "James Steven";
let name2 = "Hans";

console.log("Name 1: ", name1)
console.log("Name 2: ", name2)

// Cross out common and repeating letters
let combinedNames = name1 + name2;

// Find repeating letters
// Brute force?

// Index of repeated letters
let repeatedLetters = new Map();
let run = 0;
// position: character
for(let i = 0; i <= combinedNames.length; i++) {
   // Compare letters from index + 1
   
   for(let j = i + 1; j <= combinedNames.length; j++) {
    if (!repeatedLetters.has(j)) {
        //console.log("how many times this ran: " + run++)
   
        let letter = combinedNames.charAt(j).toLowerCase();
        if (letter.match(combinedNames.charAt(i))) {
            console.log(`Index at ${j}, char is ${letter}`)
            repeatedLetters.set(i, combinedNames.charAt(j))
            repeatedLetters.set(j, combinedNames.charAt(j))
            
            //console.log(repeatedLetters)
        }
    }
    
    // Insert to map if the statement is satisfied
   }
   
   // Once matched, insert to map (don't return until all index (except if in the map has been run through))

}
console.log(repeatedLetters);
console.log(repeatedLetters.size)
console.log(`There's a total of ${combinedNames.length} letters `)
console.log(`There are ${combinedNames.length - repeatedLetters.size} letters left`)

// More optimized algorithm later


//Use font color to remove letters initially or strikethrough

// Determine result

let resultSize = combinedNames.length - repeatedLetters.size;
let result;

switch (resultSize % 6) {
    case 5:
        result = "F";
        break;
    case 4:
        result = "L";
        break;
    case 3:
        result = "A";
        break;
    case 2:
        result = "M";
        break;
    case 1:
        result = "E";
        break;
    case 0:
        result = "S";
        break;
}

console.log(`Your result is ${result}`)
