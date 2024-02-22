const filterButtons = document.querySelectorAll('.filter-buttons button');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
