let hamburger = document.getElementById('hamburger'),
    closeButton = document.getElementById('closeButton'),
    navBlockHidden = document.getElementById('navBlockHidden');

hamburger.addEventListener('click', function() {
    navBlockHidden.classList.remove('hidden');
});

closeButton.addEventListener('click', function() {
    navBlockHidden.classList.add('hidden');
});