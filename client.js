console.log('jquery-salary-calculator');

$( document ).ready(readyNow)

function readyNow(){
    $('#submitButton').on('click', addItem)
    
}//end readyNow



function addItem(){
    console.log('in addItem');
    
  
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();

    let employeeOut = $('#employeeOut');
    // employeeOut.empty();

    employeeOut.append(`<tr><td>${firstName}</td><td>${lastName}</td></tr>`)

}//end addItem

function displayEmployee(){
    console.log('in displayEmployee');
   
}// end displayEmployee

