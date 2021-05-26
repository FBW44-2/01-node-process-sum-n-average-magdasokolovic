let arguments = process.argv.slice(2);
let [operation, ...numbers] = arguments;

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
else if (numbers.filter(argument => typeof(argument) === "number")) {
    console.log(`Sorry, the argument ${argument} is not a number, please try again`)
} 
else if (operation !== "sum" || "avg") {
    console.log(`I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)`)
}