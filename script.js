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
        <td>${annualSalary}</td>
        <td><button onclick="deleteEmployee(event, ${annualSalary})">📛</button></td>
    </tr>`

    totalSalary += Number(annualSalary);
    // console.log(totalSalary);

    let totalMonthly = document.getElementById("totalMonthly")
    totalMonthly.textContent = ''
    totalMonthly.innerHTML = `
        <p>Total Monthly: $${totalSalary / 12}</p>`
    if (totalSalary / 12 > 20000) {
        totalMonthly.classList.add("over-budget");
    }
}

function deleteEmployee(event, annualSalary){
    totalSalary -= Number(annualSalary);
    // console.log(totalSalary);
    let totalMonthly = document.getElementById("totalMonthly")
    totalMonthly.innerHTML = `
    <p>Total Monthly: $${totalSalary / 12}</p>`
    event.target.parentElement.parentElement.remove();
    if (totalSalary / 12 <= 20000) {
        totalMonthly.classList.remove("over-budget");
    }
}


// create an empty array

// create an empty object in the submit function with each of
// the submit items as properties

// have the function store each of the inputed pieces of employee
// info into the coresponding object properties when submited

// have the function push that employee into the employee array

// have the delete function be able to know where on the table the
// employee is getting deleted --> preferably numerically

// delete function access the number of employee in the array
// gets the annual salary
// divides it by 12
// gets the total salaray
// divides it by 12
// subtracts the employee salary from the total salary
// displays new total