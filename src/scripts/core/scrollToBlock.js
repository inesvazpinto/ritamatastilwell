const scrollToSection = (el) => {
    let {top} = el.getBoundingClientRect();
    let mainHeaderHeight = document.getElementById('js-main-header').scrollHeight + 20;
  
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
};

const scrollToBlock = (el) => {
    let anchorSection = el.dataset.section; 
    scrollToSection(document.getElementById(anchorSection));
    el.classList.add('is--active');
};

export default scrollToBlock;