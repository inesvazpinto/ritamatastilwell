const scrollToSection = (el) => {
    let {top} = el.getBoundingClientRect();
    let mainHeaderHeight = document.getElementById('js-main-header').scrollHeight;
  
    const scroll = {
        y: window.pageYOffset
    };

    anime({
        targets: scroll,
        y: ((top + window.pageYOffset) - mainHeaderHeight),
        duration: 850,
        easing: 'easeInOutExpo',
        update: () => window.scroll(0, scroll.y)
    })
}

const navigate = (el) => {
    el.addEventListener('click', () => {
        let anchorSection = el.dataset.section; 
        scrollToSection(document.getElementById(anchorSection));
        //menu.classList.add('is--hidden');
        //menu.classList.remove('is--visible');
        //hamburguerBtn.classList.toggle('active');
        el.classList.add('is--active');
    }, false);
}

const scrollNavigation = (navLinks) => {
    navLinks.forEach((link) => {
        navigate(link);
    });
}

export default scrollNavigation;