console.log('jquery-salary-calculator');

$( document ).ready(readyNow)


let employees = [];

function addItem(){
    console.log('in addItem');
    
    let newEmployee = {
    firstName: $('#firstNameIn').val(),
    lastName: $('#lastNameIn').val(),
    idNumber: $('#idNumberIn').val(),
    jobTitle: $('#jobTitleIn').val(),
    annualSalary: $('#annualSalaryIn').val()
    }// end newEmployee
    employees.push(newEmployee);
    console.log('employees', employees);
    
}//end addItem


function readyNow(){
    $('#submitButton').on('click', addItem)
    
}//end readyNow