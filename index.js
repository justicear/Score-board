document.getElementById("num1-el").textContent = 0;
document.getElementById("num2-el").textContent = 0;
function add() {
  let current = document.getElementById("num1-el").textContent;
  document.getElementById("num1-el").textContent = parseInt(current) + 1;
}
function add2() {
  let current = document.getElementById("num1-el").textContent;
  document.getElementById("num1-el").textContent = parseInt(current) + 2;
}
function add3() {
  let current = document.getElementById("num1-el").textContent;
  document.getElementById("num1-el").textContent = parseInt(current) + 3;
}
function addq() {
  let current = document.getElementById("num2-el").textContent;
  document.getElementById("num2-el").textContent = parseInt(current) + 1;
}
function add2q() {
  let current = document.getElementById("num2-el").textContent;
  document.getElementById("num2-el").textContent = parseInt(current) + 2;
}
function add3q() {
  let current = document.getElementById("num2-el").textContent;
  document.getElementById("num2-el").textContent = parseInt(current) + 3;
}