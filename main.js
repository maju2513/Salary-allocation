//const monthlySalaryInput = document.querySelector(".monthly-salary");

//const salaryTotal = document.querySelector(".salary-total .value");
//const expensesTotal = document.querySelector(".expenses-total .value");
//const leisureTotal = document.querySelector(".leisure-total .value");
//const savingsTotal = document.querySelector(".savings-total .value");

const calculateBtn = document.querySelector(".calculate-button");
alert(calculateBtn);

let salary = document.getElementById("moneyin").value;
salary = salary.replace(/e.g £/g, "");
let expenses = (50 / 100) * parseInt(salary);
let leisure = (20 / 100) * parseInt(salary);
let savings = (30 / 100) * parseInt(salary);

function showSalary() {
  document.getElementById("displaysalary").innerHTML = parseInt(salary);
  document.getElementById("display-expenses").innerHTML = expenses;
  document.getElementById("display-leisure").innerHTML = leisure;
  document.getElementById("display-savings").innerHTML = savings;
}
showSalary();

//calculateBtn.addEventListener("click");
