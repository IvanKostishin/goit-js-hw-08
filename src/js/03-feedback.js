import throttle from 'lodash.throttle';
const feedback = document.querySelector('.feedback-form');
feedback.addEventListener('input', throttle(saveDataOnInput, 500));
feedback.addEventListener('submit', submit, { once: true });
const dataForm = {};

function saveDataOnInput() {
  dataForm.email = feedback.email.value;
  dataForm.message = feedback.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function checkForm() {
  const localStorageData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (localStorageData) {
    feedback.email.value = localStorageData.email;
    feedback.message.value = localStorageData.message;
  }
}

function submit(e) {
  e.preventDefault();npm 
  console.log(dataForm);
  localStorage.clear();
  feedbackForm.reset();
}
checkForm();
