import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';

const today = new Date().toISOString().split('T')[0];

const dateSelect = flatpickr('#date', {
  minDate: '2020-01-01',
  maxDate: today,
  dateFormat: 'Y-m-d',
  defaultDate: today,
});

const dateSelectBtn = document.querySelector('.calendar_show_btn');
const dateInput = document.querySelector('.date_input');

dateSelectBtn.addEventListener('click', () => {
  dateSelect.open();
  dateInput.focus();
});
