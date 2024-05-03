function resetForm(form) {
  form.reset();
}

export function formValidation() {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          resetForm(form);
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });
}
