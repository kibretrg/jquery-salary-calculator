console.log('jquery-salary-calculator');

$( document ).ready(readyNow)


let employeeArray = [];

function addItem(){
    console.log('in addItem');
    
    let eachEmployee = {
    firstName = $('#firstNameIn').val(),
    lastName = $('#lastNameIn').val(),
    idNumber = $('#idNumberIn').val(),
    jobTitle = $('#jobTitleIn').val(),
    annualSalary = $('#annualSalaryIn').val()
    }// end newEmployee
    employeeArray.push(eachEmployee);
    console.log('employeeArray', employeeArray);
    displayEmployee();
}//end addItem

function displayEmployee(){
    console.log('in displayEmployee');
    let employeeOut = $('outputDiv');
    employeeOut.empty();
    //loop through the employee array
    for(let employee of employeeArray){
    //for each item create a new <li> in employeeOut
        employeeOut.append(`<li>${employee.firstName}</li>`)
    }
    
}// end displayEmployee

function readyNow(){
    $('#submitButton').on('click', addItem)
    
}//end readyNow