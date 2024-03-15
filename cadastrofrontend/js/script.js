var students = [
    {
        id: 1,
        name: "Eufranor",
        email: "eufranorfilho@outlook.com",
        phone: "84999234422",
        course: 1,
        period: 1
    },
    {
        id: 2,
        name: "João",
        email: "João@outlook.com",
        phone: "849982234455",
        course: 2,
        period: 2
    }

];
var courses = [
    {
        id: 1,
        name: "Engenharia de Software"
    },
    {
        id: 2,
        name: "Ciência da computação"
    }
];
//Onload
loadStudents()

function loadStudents(){
    for(let student of students){
        addNewRow(student);
    }
}

   // $.getJSON('http://localhost:8080/students', response => {
     //   for (let student of students){
           // addNewRow(student);
      //  }
    //})}
    function addNewRow(student) {
        var table = document.getElementById('studentsTable');
        var newRow = table.insertRow();
        
        var idCell = newRow.insertCell();
        idCell.textContent = student.id;
    
        var nameCell = newRow.insertCell();
        nameCell.textContent = student.name;
    
        var emailCell = newRow.insertCell();
        emailCell.textContent = student.email;
        emailCell.className = "d-none d-md-table-cell";
    
        var phoneCell = newRow.insertCell();
        phoneCell.textContent = student.phone;
        phoneCell.className = "d-none d-md-table-cell";
    
        var courseCell = newRow.insertCell();
        courseCell.textContent = courses[student.course - 1].name;
    
        var periodCell = newRow.insertCell();
        periodCell.textContent = student.period;
        periodCell.className = "d-none d-md-table-cell";

        for (var i = 0; i < table.rows[0].cells.length - 1; i++) {
            newRow.insertCell();
        }
    
        var removeButtonCell = newRow.insertCell(); // Insere a célula para o botão "Remover"
        var removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.className = 'btn btn-danger btn-sm';
    
        removeButton.onclick = function() {
            removeNewRow(this);
        };
    
        removeButtonCell.appendChild(removeButton); // Adiciona o botão à célula de remoção
    }
function save(){
    var student = {
       id: students.length+1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById('inputPhone').value,
        course: document.getElementById('inputCourse').value,
        period: document.getElementById('inputPeriod').value
    }
   
   addNewRow(student);
   students.push(student);
   document.getElementById("formStudent").reset();
   document.getElementById('inputName').focus();
}

function removeNewRow(button) {
    var row = button.parentNode.parentNode;
    var table = row.parentNode;
    table.deleteRow(row.rowIndex);
}