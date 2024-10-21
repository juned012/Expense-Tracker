let total = 0;
function trackExpense() {
  const description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const expenseList = document.getElementById("expense-list");
  const totalAmmount = document.getElementById("total-amount");

  if (description && !isNaN(amount) && amount > 0) {
    const row = document.createElement("tr");
    row.innerHTML = `<td> ${description} </td> <td>$${amount.toFixed(2)}</td>`;
    expenseList.appendChild(row);
    total += amount;
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
    totalAmmount.innerText = total.toFixed(2);
  } else {
    alert("Please enter valid description and amount");
  }
}
