// Your code here
function greet() {
  var greeting = "Welcome!";
  alert(greeting);

  var name = prompt("What is your name?");
  if (name) {
    alert("Hello, " + name + "!");
  } else {
    alert("Hello!");
  }

  var age = prompt("How old are you?");
  age = parseInt(age);

  var hasBirthday = confirm("Have you had a birthday this year?");
  var currentYear = new Date().getFullYear();
  var birthYear;

  if (hasBirthday) {
    birthYear = currentYear - age;
  } else {
    birthYear = currentYear - (age + 1);
  }

  alert("You were born in " + birthYear);
}
