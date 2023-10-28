// create and structure table in html 
// add div tags 

// create button functionalities 
// create remove functionalities 
// create incrementers 
// create salary calculator

// over budget class to footer

// do css editing

// delete employee button

let totalSalary = 0;

function forSubmit (event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let employeeID = document.getElementById("employeeID").value
    let jobTitle = document.getElementById("jobTitle").value
    let annualSalary = document.getElementById("annualSalary").value
    document.getElementById("firstName").value = ''
    document.getElementById("lastName").value = ''
    document.getElementById("employeeID").value = ''
    document.getElementById("jobTitle").value = ''
    document.getElementById("annualSalary").value = ''

    let tableBody = document.getElementById("tableBody")

    tableBody.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeID}</td>
        <td>${jobTitle}</td>
        <td>$${annualSalary}</td>
        <td><button onclick="deleteEmployee(event)">📛</button></td>
    </tr>`

    totalSalary += Number(annualSalary)
    console.log(totalSalary);

    let totalMonthly = document.getElementById("totalMonthly")
    totalMonthly.textContent = ''
    if (totalSalary / 12 > 20000)
        totalMonthly.innerHTML += `<div class="over-budget">$${totalSalary / 12}</div>`
    else {
    totalMonthly.textContent = `$${totalSalary / 12}`
    }
}

function deleteEmployee(event){
    event.target.parentElement.parentElement.remove();
}