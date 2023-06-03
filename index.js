// Your code here
function greet() {

  var name = prompt("What is your name?");
  if (name) {
    alert("Hello, " + name);
  } else {
    alert ("Hello!");
  }
  
  var userAge = prompt("How old are you?");
  console.log(parseInt(userAge));

  var birthday = confirm("Have you had a birthday this year?");
  var currentYear = new Date().getFullYear();

  var birthYear;

  if (birthday) {
    birthYear = currentYear - userAge;
  } else {
    birthYear = currentYear - userAge - 1;
  }

  alert ("Hello! You were born in " + birthYear + "!");

}
