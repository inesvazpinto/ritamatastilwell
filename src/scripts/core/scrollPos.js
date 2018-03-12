// From https://davidwalsh.name/javascript-debounce-function.
function _debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const scrollPos = (sections, navLinks) => {
    $(window).on('scroll', _debounce(function() {
        let curr_pos = $(this).scrollTop();

        sections.each(function() {
            let top = $(this).offset().top - 120;
            let bottom = top + $(this).outerHeight();
            let thisLink = $(this).data('link');

            if (curr_pos >= top && curr_pos <= bottom) {
                navLinks.removeClass('is--active');
                $('#' + thisLink).addClass('is--active');
            }
        });
    }, 200));
};

export default scrollPos;