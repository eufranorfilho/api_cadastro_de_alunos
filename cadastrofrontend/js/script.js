var students = [

];
var courses = [
   
];
//Onload
loadCourses();
loadStudents();
function loadStudents(){
    fetch('http://localhost:8080/students')
    .then(response => response.json())
    .then((data) =>{
        students = data
        for(let student of students){
        addNewRow(student);
        }
    }).catch(error => {
        console.error('Erro ao carregar os alunos:', error);
    });
    
}

function loadCourses(){
   return fetch('http://localhost:8080/courses')
    .then(response => response.json())
    .then(data => {
        courses = data;
    })
    .catch(error => {
        console.error('Erro ao carregar os cursos:', error);
    });
}
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
    
        var courseName = '';
        if (student.idCourse >= 1 && student.idCourse <= courses.length) {
            courseName = courses[student.idCourse - 1].name;
            }
        var courseCell = newRow.insertCell();
        courseCell.textContent = courseName;
    
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
        idCourse: document.getElementById('inputCourse').value,
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