/*input */
let name = prompt("add your name ");
let lastName = prompt("add your last name ");
let age = parseInt(prompt("add your age "));
let number = prompt("add your favorite number ");
/* algorit */
let solution = "your name is " + name +" "+ lastName; 
let solution2 = "the multiplication between your age and your favorite number is " + (age*number)
/*print */
console.log(solution); 
console.log(solution2);
alert(solution)
alert(solution2)

document.write('<h1>Name: </h1>' + solution)
document.write('<h1>Number: </h1>' + solution2)