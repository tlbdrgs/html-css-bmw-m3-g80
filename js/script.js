(() => {
	const navbar = document.querySelector('.navbar');
	const designSection = document.querySelector('#design');
	if (!navbar || !designSection) return;

	const getIsOverDesign = () => {
		const navHeight = navbar.offsetHeight || 0;
		const rect = designSection.getBoundingClientRect();
		return rect.top <= navHeight && rect.bottom > 0;
	};

	const changeNavbarColor = () => {
		if (getIsOverDesign()) {
			navbar.classList.add('is-on-design');
		} else {
			navbar.classList.remove('is-on-design');
		}
	};

	window.addEventListener('scroll', changeNavbarColor, { passive: true });
	window.addEventListener('resize', changeNavbarColor);
	document.addEventListener('DOMContentLoaded', changeNavbarColor);
	changeNavbarColor();
})();

const form = document.querySelector('.footer-content form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const message = document.getElementById('message').value.trim();

	const missingFields = [];
	
	if (name === "") missingFields.push("name");
	if (email === "") missingFields.push("email");
	if (message === "") missingFields.push("message");

	let output = "";

	if (missingFields.length > 0) {
		if (missingFields.length === 1) {
			output = `Please type your ${missingFields[0]}.`;
		} else if (missingFields.length === 2) {
			output = `Please type your ${missingFields[0]} and ${missingFields[1]}.`;
		} else {
			output = `Please type your ${missingFields[0]}, ${missingFields[1]}, and ${missingFields[2]}.`;
		}
		
		formMessage.innerHTML = output;
		formMessage.className = 'form-message error';
		console.log(output);
	} else {
		output = `Thank you, <span class="highlight-name">${name}</span>! We have received your message and will contact you at <span class="highlight-email">${email}</span> soon.`;
		
		formMessage.innerHTML = output;
		formMessage.className = 'form-message success';
		
		console.log('Form submitted successfully!');
		console.log('Name:', name);
		console.log('Email:', email);
		console.log('Message:', message);
		
		form.reset();
	}
})