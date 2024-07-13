let firstNames = [];
let lastNames = [];
let ages = [];

for (let i = 0; i < 5; i++) {
   let firstName = prompt(`Enter first name for person ${i+1}:`);
   let lastName = prompt(`Enter last name for person ${i+1}:`);
   let age = prompt(`Enter age for person ${i+1}:`);
   firstNames.push(firstName);
   lastNames.push(lastName);
   ages.push(age);
}

document.write("<h3>Entered Data:</h3>");
for (let i = 0; i < 5; i++) {
   document.write(`Person ${i+1}: ${firstNames[i]} ${lastNames[i]}, Age: ${ages[i]}<br>`);
}

let index = prompt("Enter an index number (0-4) to display the data for a person:");

if (index >= 0 && index < 5) {
   document.write(`<h3>Data for ID = ${index}:</h3>`);
   document.write(`
       ID = ${index}<br>
       First Name = ${firstNames[index]}<br>
       Last Name = ${lastNames[index]}<br>
       Age = ${ages[index]}
   `);
} else {
   document.write("<h3>Invalid index entered.</h3>");
}