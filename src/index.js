require('./styles/styles.scss');

var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab')),
    currentTab = 'eat';

tabs.map(function(tab) {
    tab.addEventListener('click', function(e) {
        document.getElementById(currentTab).classList.add('hidden');
        document.getElementById(e.target.attributes.value.value).classList.remove('hidden');

        document.querySelector('.tab[value="' + currentTab + '"]').classList.remove('tab--active');
        e.target.classList.add('tab--active');

        currentTab = e.target.attributes.value.value;
    });
});


