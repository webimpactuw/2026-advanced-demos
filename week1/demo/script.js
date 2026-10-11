const defaultName = "friend";
let clickCount = 0;

function addSeven(number) {
  return number + 7;
}

function styleSkills() {
  const skills = document.getElementsByClassName("skill");

  for (let i = 0; i < skills.length; i++) {
    skills[i].style.fontWeight = "bold";
  }
}

function fillPlan() {
  const list = document.getElementById("plan");

  if (list === null) {
    return;
  }

  const steps = ["Write the HTML", "Style it with CSS", "Add a button with JavaScript"];
  let html = "";
  let i = 0;

  while (i < steps.length) {
    html = html + "<li>" + steps[i] + "</li>";
    i = i + 1;
  }

  list.innerHTML = html;
}

function greet() {
  const input = document.getElementById("name-input");
  const message = document.getElementById("message");
  const facts = document.getElementById("facts");
  const name = input.value;

  clickCount = clickCount + 1;

  if (name === "") {
    message.innerHTML = "Hello, " + defaultName + ". Type your name next time.";
    message.style.color = "red";
  } else {
    message.innerHTML = "Hello, " + name + "!";
    message.style.color = "#14213d";
  }

  let countLine = "You have clicked " + clickCount + " times.";

  if (clickCount === 1) {
    countLine = "You have clicked 1 time.";
  }

  const lines = [
    countLine,
    "That count plus seven is " + addSeven(clickCount) + "."
  ];

  let html = "";
  let i = 0;

  while (i < lines.length) {
    html = html + "<li>" + lines[i] + "</li>";
    i = i + 1;
  }

  facts.innerHTML = html;
}

styleSkills();
fillPlan();
