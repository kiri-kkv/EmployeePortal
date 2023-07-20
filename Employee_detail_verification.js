"use strict";

const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const designationInput = document.getElementById("designation");
const imageInput = document.getElementById("image");

const idError = document.querySelector(".id_error");
const nameError = document.querySelector(".name_error");
const ageError = document.querySelector(".age_error");
const genderError = document.querySelector(".gender_error");
const desgError = document.querySelector(".desg_error");
const imageError = document.querySelector(".image_error");

function validation() {
  let idValue = idInput.value;
  let nameValue = nameInput.value;
  let ageValue = ageInput.value;
  let genderValue = genderInput.value;
  let designationValue = designationInput.value;
  let imageValue = imageInput.value;

  let idCheck =
    idValue == "" ||
    Number(idValue) == NaN ||
    employeeDetail.hasOwnProperty(idValue) ||
    keys.has(idValue)
      ? false
      : true;
  let nameCheck = nameValue == "" || nameValue.length < 5 ? false : true;
  let ageCheck =
    ageValue == "" || Number(ageValue) < 18 || Number(ageValue) > 60
      ? false
      : true;
  let genderCheck = genderValue == "select" ? false : true;
  let designationCheck = designationValue == "select" ? false : true;
  let imageCheck = imageValue == "" ? false : true;

  idError.innerHTML =
    idCheck == false
      ? "Enter Correct Id or the key is already present or the key is ued"
      : "";
  nameError.innerHTML = nameCheck == false ? "Enter a name" : "";
  ageError.innerHTML = ageCheck == false ? "Enter Correct age" : "";
  genderError.innerHTML = genderCheck == false ? "Select a gender" : "";
  desgError.innerHTML = designationCheck == false ? "Select a designation" : "";
  imageError.innerHTML = imageCheck == false ? "Enter a image" : "";

  if (
    !idCheck ||
    !nameCheck ||
    !ageCheck ||
    !genderCheck ||
    !designationCheck ||
    !imageCheck
  )
    return false;

  addEmployee(
    idValue,
    nameValue,
    ageValue,
    genderValue,
    designationValue,
    imageValue
  );

  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  genderInput.value = "select";
  designationInput.value = "select";
  imageInput.value = "";

  return true;
}
