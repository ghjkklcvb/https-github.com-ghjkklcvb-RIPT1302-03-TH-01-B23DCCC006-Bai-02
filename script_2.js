let students = []; 

document.addEventListener('DOMContentLoaded', function() {
    const addStudentBtn = document.getElementById('addStudentBtn');
    const modal = document.getElementById('studentModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const form = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');

    displayStudents()

    addStudentBtn.onclick = function() {
        modal.style.display = 'block';
        form.reset();
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    form.onsubmit = function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const classInfo = document.getElementById('class').value;

        if (name && age && address && phone && email && classInfo) {
            const studentId = document.getElementById('studentId').value;
            if (studentId) {
                updateStudent(studentId, name, age, address, phone, email, classInfo);
            } else { 
                addStudent(name, age, address, phone, email, classInfo);
            }
            modal.style.display = 'none';
        } else {
            alert('Vui lòng điền đầy đủ thông tin sinh viên.');
        }
    }
});

function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const row = `<tr>
                        <td>${index + 1}</td>
                        <td>${student.name}</td>
                        <td>${student.age}</td>
                        <td>${student.address}</td>
                        <td>${student.phone}</td>
                        <td>${student.email}</td>
                        <td>${student.class}</td>
                        <td>
                            <button onclick="editStudent(${student.id})">Sửa</button>
                            <button onclick="deleteStudent(${student.id})">Xóa</button>
                        </td>
                    </tr>`;
        studentList.innerHTML += row;
    });
}

function addStudent(name, age, address, phone, email, classInfo) {
    const studentId = students.length + 1;
    const newStudent = { id: studentId, name, age, address, phone, email, class: classInfo };
    students.push(newStudent);
    displayStudents();
}

function editStudent(id) {
    const student = students.find(student => student.id === id);
    document.getElementById('studentId').value = student.id;
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('address').value = student.address;
    document.getElementById('phone').value = student.phone;
    document.getElementById('email').value = student.email;
    document.getElementById('class').value = student.class;

    const modal = document.getElementById('studentModal');
    modal.style.display = 'block';
}

function updateStudent(id, name, age, address, phone, email, classInfo) {
    const studentIndex = students.findIndex(student => student.id === parseInt(id));
    students[studentIndex] = { id: parseInt(id), name, age, address, phone, email, class: classInfo };
    displayStudents();
}

function deleteStudent(id) {
    const confirmation = confirm('Bạn có chắc chắn muốn xóa sinh viên này?');
    if (confirmation) {
        students = students.filter(student => student.id !== id);
        displayStudents();
    }
}
