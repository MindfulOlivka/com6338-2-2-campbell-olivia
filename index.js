// Your code here
function greet() {
  var greeting = "Welcome!";
  alert(greeting);

  var name = prompt("What is your name?");
  alert("Hello, " + name);

  var userAge = prompt("How old are you?");
  userAge = parseInt(userAge);

  var birthday = confirm("Have you had a birthday this year?");
  var birthYear;

  if (birthday) {
    birthYear = new Date().getFullYear() - userAge;
  } else {
    birthYear = new Date().getFullYear() - userAge - 1;
  }

  alert("You were born in " + birthYear);
}
