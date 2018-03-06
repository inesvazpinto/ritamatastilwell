const toggleMenu = function(self, menu) {
	 self.classList.toggle('is--active');
    
    if (menu.classList.contains('is--hidden')) {
        menu.classList.remove('is--hidden');
        menu.classList.add('is--visible');
    } else {
        menu.classList.add('is--hidden');
        menu.classList.remove('is--visible');
    }
};

export default toggleMenu;