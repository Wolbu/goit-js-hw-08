import throttle from 'lodash.throttle';

const EMAIL_KEY = 'email';
const MESSAGE_KEY = 'message';
const emailInput = document.querySelector('input[ type="email"]');
const messageInput = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

onPageLoading();

emailInput.addEventListener('input', throttle(onEmailInput, 500));
messageInput.addEventListener('input', throttle(onMessageInput, 500));
form.addEventListener('submit', onFormSubmit);

function onEmailInput(event) {
  const userEmail = event.target.value;
  localStorage.setItem(EMAIL_KEY, userEmail);
}

function onMessageInput(event) {
  const userMessage = event.target.value;
  localStorage.setItem(MESSAGE_KEY, userMessage);
}

function onFormSubmit(event) {
  event.preventDefault();
  form.reset();
  localStorage.removeItem(EMAIL_KEY);
  localStorage.removeItem(MESSAGE_KEY);
}

function onPageLoading() {
  const savedEmail = localStorage.getItem(EMAIL_KEY);
  if (savedEmail) {
    emailInput.value = savedEmail;
  }
  const savedMessage = localStorage.getItem(MESSAGE_KEY);
  if (savedMessage) {
    messageInput.value = savedMessage;
  }
}
