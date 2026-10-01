const forms =document.querySelector('.container')
const button = document.querySelector('.btn');
const nameInput = document.querySelectorAll('.inputSec')[0];
const emailInput = document.querySelectorAll('.inputSec')[1];
const passwordInput = document.querySelectorAll('.inputSec')[2];
const ageInput = document.querySelectorAll('.inputSec')[3];
const SelectedGender =document.querySelectorAll('.genderInput');
// const SelectedGender =document.querySelectorAll('.genderInput');
const labels = document.querySelector('.main');
const skillInput = document.querySelectorAll('.skillInput');
const SelectedCity = document.querySelector('.cityInput');
const results =document.querySelector('.result');

forms.addEventListener("submit", (event) =>{
 event.preventDefault();

    const formData ={
        name: nameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
        age:ageInput.value,
        gender: [...SelectedGender].some(gender => gender.checked),
        skill: [...skillInput].some(skill => skill.checked),
        city:SelectedCity.value
    }
    if(formData.name === ""){
      results.textContent = " Name section is not Empty"
    }

    else if (formData.email === ""){
     results.textContent = "Email section is not Empty";
    }

    else if (formData.password.length<6){
        results.textContent ="Password must be at least 6 characters";
    }

    else if (formData.age < 18){
        results.textContent = "Age must be 18 or above";
    }

    else if (!formData.gender){
        results.textContent ="Please select your gender";
    }

    else if (!formData.skill){
results.textContent = "Select atleast 1 skill";
    }

    else if(formData.city === "") {
        results.textContent= "Select your city";
    }

    else {
        results.textContent = "Registration Successful"
    }
})