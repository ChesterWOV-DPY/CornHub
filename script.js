const cards = document.querySelectorAll('.card');

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', event => {
        window.location.assign(location.host + event.currentTarget.dataset.id + '.html');
    });
};
