document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const cardContent = card.querySelector('.card-content');

    card.addEventListener('click', function() {
        if (cardContent.style.display === 'none' || cardContent.style.display === '') {
            cardContent.style.display = 'block';
        } else {
            cardContent.style.display = 'none';
        }
    });
});
