import SlimSelect from 'slim-select';

const slimSelect = new SlimSelect({
  select: '#order',
  settings: {
    showSearch: false,
  },
});

const selectOpenBtn = document.querySelector('.select_show_btn');
const select = document.querySelector('.select_order');

selectOpenBtn.addEventListener('click', () => {
  slimSelect.open();
  select.focus();
});
