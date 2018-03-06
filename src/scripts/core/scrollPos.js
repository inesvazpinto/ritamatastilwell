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

const scrollPos = (blocks, links) => {
    blocks.forEach(function(block) {
        let thisLink = document.getElementById(block.dataset.link);
        let offsetBlock = block.getBoundingClientRect();
        
        let offsetBlockBottom = offsetBlock.y + offsetBlock.height;
        
        window.addEventListener('scroll', _debounce(function() {
            let winHeight = window.pageYOffset + 120;
            
            if (winHeight >=  offsetBlock.y && winHeight <= offsetBlockBottom) {
                thisLink.classList.add('is--active')
            } else {
                thisLink.classList.remove('is--active');
            }
        }, 0));
    });
};

export default scrollPos;
