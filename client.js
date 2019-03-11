console.log('jquery-salary-calculator');

$( document ).ready(readyNow)

function readyNow(){
    $('#submitButton').on('click', addEmployee)
    
}//end readyNow



function addEmployee(){
    console.log('in addEmployee');
    
  
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();

    let addRow = $('#addEmployeeRow');
    // addEmployee.empty();

    addRow.append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${idNumber}</td><td>${jobTitle}</td><td>${annualSalary}</td></tr>`)

}//end addEmployee

function displayEmployee(){
    console.log('in displayEmployee');
   
}// end displayEmployee

