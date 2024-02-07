import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
const today = new Date().toISOString().split('T')[0];

flatpickr('#date', {
  minDate: '2020-01-01',
  maxDate: today,
  dateFormat: 'Y-m-d',
  theme: 'dark',
});
