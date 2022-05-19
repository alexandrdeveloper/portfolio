document.addEventListener('DOMContentLoaded', function() {
	
    const header = document.querySelector('.b-header');

    console.log(header);

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        
        if(scrolled > 10) {
            header.classList.add('b-header_scrolled');

        } else {
            header.classList.remove('b-header_scrolled');
        }
    });

    let portfolioMixButton = document.querySelectorAll('.b-filter__item');

    portfolioMixButton.forEach(button => {
        button.addEventListener('click', function() {
            portfolioMixButton.forEach(item => {
                item.classList.remove('b-filter__item_active');
            });
            this.classList.toggle('b-filter__item_active');
        });
    });

    let portfolioList = document.querySelector('.b-plates');

    const portfolioMixer = mixitup(portfolioList);


});

