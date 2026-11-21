const heading = document.getElementById("heading");

heading.innerText = "Welcome to JavaScript DOM";

// ======= Task 2 ========

const para = document.getElementById("para");
const changeText = document.getElementById("change-text");

changeText.addEventListener("click", function () {
  para.innerText = "Paragraph text changed!";
});

// ======= Task 3 ========
const theme = document.getElementById("theme-btn");
theme.addEventListener("click", function () {
  document.getElementById("theme").style.backgroundColor = "lightblue";
});

// ======= Task 4 ========

const alertBtn = document.getElementById("alert-btn");
alertBtn.addEventListener("click", function () {
  alert("DOM is working!");
});

// ======= Task 5 ========

const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", function () {
  const text = document.getElementById("get-value").value;
  document.getElementById("disply-value").innerText = text;
});
