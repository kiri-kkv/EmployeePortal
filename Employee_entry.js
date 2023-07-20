"use strict";

const employeTable = document.querySelector(".emp_detail-fields");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// console.log(button, "here");
let employeeDetail = {};
let keys = new Set();

function showEmployeeDetail() {
  let str = "";
  for (let key in employeeDetail) {
    console.log(key);
    str += `
        <tr>
        <td>${key}</td>
        <td>${employeeDetail[key].name}</td>
        <td>${employeeDetail[key].age}</td>
        <td>${employeeDetail[key].gender}</td>
        <td>${employeeDetail[key].designation}</td>
        <td>
            <div class="emp_detail-action">
              <button onclick="viewEmployee(${key})" class="emp_action action-1">View</button>
              <button onclick="editEmployee(${key})" class="emp_action action-2">Edit</button>
              <button onclick="deleteEmployee(${key})" class="emp_action action-3">Delete</button>
        </td>
        </tr>
        `;
  }
  employeTable.innerHTML = str;
}

function addEmployee(
  idValue,
  nameValue,
  ageValue,
  genderValue,
  designationValue,
  imageValue
) {
  console.log(imageValue);
  employeeDetail[idValue] = {
    name: nameValue,
    age: ageValue,
    gender: genderValue,
    designation: designationValue,
    image: imageValue,
  };
  keys.add(idValue);
  showEmployeeDetail();
}

function deleteEmployee(key) {
  delete employeeDetail[key];
  showEmployeeDetail();
}

function editEmployee(key) {
  idInput.value = key;
  nameInput.value = employeeDetail[key].name;
  ageInput.value = employeeDetail[key].age;
  genderInput.value = employeeDetail[key].gender;
  designationInput.value = employeeDetail[key].designation;
  imageInput.value = employeeDetail[key].image;
  deleteEmployee(key);
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function viewEmployee(key) {
  let obj = employeeDetail[key];

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  modal.innerHTML = `
        <div class="employee_image">
            <img class="employee_card_image" src=${obj.image}>
        </div>

        <div class="employee_card-detail">
            <p>Name:<span>${obj.name}</span></p>
            <p>Age:<span>${obj.age}</span></p>
            <p>Gender:<span>${obj.gender}</span></p>
            <p>Designation:<span>${obj.designation}</span></p>
        <button class="card_close_button">Ok</button>
        </div>
    `;
  const button = document.querySelector(".card_close_button");

  overlay.addEventListener("click", closeModal);
  button.addEventListener("click", closeModal);
}
