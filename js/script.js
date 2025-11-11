(() => {
	const navbar = document.querySelector('.navbar');
	const designSection = document.querySelector('#design');
	if (!navbar || !designSection) return;

	const getIsOverDesign = () => {
		const navHeight = navbar.offsetHeight || 0;
		const rect = designSection.getBoundingClientRect();
		return rect.top <= navHeight && rect.bottom > 0; // still on screen
	};

	const updateTheme = () => {
		if (getIsOverDesign()) {
			navbar.classList.add('is-on-design');
		} else {
			navbar.classList.remove('is-on-design');
		}
	};

	window.addEventListener('scroll', updateTheme, { passive: true });
	window.addEventListener('resize', updateTheme);
	document.addEventListener('DOMContentLoaded', updateTheme);
	updateTheme();
})();

