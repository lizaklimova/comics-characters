document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('sticky-header');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      header.classList.add('solid_header');
    } else {
      header.classList.remove('solid_header');
    }
  });
});
