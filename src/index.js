require('./styles/styles.scss');

var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab')),
    currentTab = 'eat';

tabs.map(function(tab) {
    tab.addEventListener('click', function(e) {
        var previousTab = document.getElementById(currentTab),
            newTabValue = e.target.attributes.value.value,
            activeTab = document.getElementById(newTabValue)

        previousTab.classList.add('hidden');

        activeTab.classList.remove('hidden');

        document.querySelector('.tab[value="' + currentTab + '"]').classList.remove('tab--active');
        
        e.target.classList.add('tab--active');

        currentTab = newTabValue;
    });
});


