//Validation for create listing bottom form

let titleInputBottomForm = document.getElementById('listing-title-bottom-form');
let dateInputBottomForm = document.getElementById('date-bottom-form');

titleInputBottomForm.addEventListener('change', (event) => {
  let titleInputBottomForm = event.target;
  let valid = titleInputBottomForm.checkValidity();
  if (!valid) {
    titleInputBottomForm.classList.remove('is-valid');
    titleInputBottomForm.classList.add('is-invalid');
  } else {
    titleInputBottomForm.classList.remove('is-invalid');
    titleInputBottomForm.classList.add('is-valid');
  }
});

dateInputBottomForm.addEventListener('change', (event) => {
  let dateInputBottomForm = event.target;
  let valid = dateInputBottomForm.checkValidity();
  if (!valid) {
    dateInputBottomForm.classList.remove('is-valid');
    dateInputBottomForm.classList.add('is-invalid');
  } else {
    dateInputBottomForm.classList.remove('is-invalid');
    dateInputBottomForm.classList.add('is-valid');
  }
});
