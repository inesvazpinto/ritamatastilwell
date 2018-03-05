const toggleBox = function(el) {
    if(el.classList.contains('is--visible')) {
        el.classList.remove('is--visible');
        el.classList.add('is--hidden');
    } else {
        el.classList.add('is--visible');
        el.classList.remove('is--hidden');
    }
};

export default toggleBox;