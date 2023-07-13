const displayChart = (expenses, leisure, savings) => {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Expenses", "Leisure", "Savings"],
      datasets: [
        {
          data: [expenses, leisure, savings],
          borderWidth: 1,
          backgroundColor: ["#e63946", "#14213d", "#fca311"],
        },
      ],
    },
  });
};

let buttonMain = document.getElementById("btn-1");

function showSalary() {
  let salary = document.getElementById("moneyin").value;
  salary = salary.replace(/e.g £/g, "");
  let expenses = (50 / 100) * parseInt(salary);
  let leisure = (20 / 100) * parseInt(salary);
  let savings = (30 / 100) * parseInt(salary);

  document.getElementById("displaysalary").innerHTML = parseInt(salary);
  document.getElementById("display-expenses").innerHTML = expenses;
  document.getElementById("display-leisure").innerHTML = leisure;
  document.getElementById("display-savings").innerHTML = savings;
  displayChart(expenses, leisure, savings);
}

showSalary();

buttonMain.addEventListener("click", showSalary);
