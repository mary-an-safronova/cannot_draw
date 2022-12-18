const nameFeedbackInput = document.querySelector('#name');
const mailFeedbackInput = document.querySelector('#email');
const textFeedbackInput = document.querySelector('#feedback-text');
const feedbackBtnEl = document.querySelector('.feedback__button');
const feedbackFormEl = document.querySelector('.feedback__form');

function validationForm() {
	if (nameFeedbackInput.value !== '' && mailFeedbackInput.value !== '' && textFeedbackInput.value !== '') {
		if (nameFeedbackInput.value !== '0' && mailFeedbackInput.value !== '0' && textFeedbackInput.value !== '0') {
			return true;
		}
	} else {
		return false;
	}
}

nameFeedbackInput.addEventListener('input', validationForm);
mailFeedbackInput.addEventListener('input', validationForm);
textFeedbackInput.addEventListener('input', validationForm);

// Обработчик «отправки» формы
function handleFeedbackFormSubmit(evt) {
	evt.preventDefault();
	if (validationForm()) {
		alert('Ваша заявка отправлена');
		if (nameFeedbackInput.value !== '' && mailFeedbackInput.value !== '' && textFeedbackInput.value !== '') {
			nameFeedbackInput.value = '';
			mailFeedbackInput.value = '';
			textFeedbackInput.value = '';
		}
	}
}

feedbackFormEl.addEventListener('submit', handleFeedbackFormSubmit);
