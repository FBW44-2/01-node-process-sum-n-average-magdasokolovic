let arguments = process.argv.slice(2);
let [operation, ...numbers] = arguments;

for (let i=0; i<numbers.length; i++) {
    if (isNaN(numbers[i])) {
        return console.log(`Sorry, the argument ${numbers[i]} is not a number, please try again`)
    }
}
if (operation === "sum") {
    let total = numbers.reduce((acc, number)=>{
        acc = acc + Number(number);
        return acc
    }, +0)
    console.log("the total is: " + total)
} 
else if (operation === "avg") {
     let average = numbers.reduce((acc, number, index)=>{
         acc= acc + Number(number)
         return acc / (index + 1)
     }, +0)
     console.log("the average is: " + average)
} 
else if (operation !== "sum" || "avg") {
    console.log(`I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)`)
}

