// Global variables
const sections = document.querySelectorAll('section');
const ul = document.getElementById('navbar__list');
const containers = document.querySelectorAll('.landing__container');

// Scroll to anchor ID using scrollTO event
const scrollTo = (navLink, section) => {
	navLink.addEventListener('click', (event) => {
		event.preventDefault();
		section.scrollIntoView({
			behavior: 'smooth',
		});
	});
};

// Build navigation menu dynamically
const navList = () => {
	sections.forEach((section) => {
		console.log(section);
		const li = document.createElement('li'); // list of each items
		// li.className = 'navList';
		const sectionName = section.getAttribute('data-nav');
		const sectionLinkID = section.getAttribute('id');
		const sectionLink = `<a class='menu__link' href='#${sectionLinkID}'>${sectionName}</a>`;

		li.innerHTML = sectionLink;
		// li.setAttribute('style', 'display: block;'); // removes the bullet
		scrollTo(li, section);
		ul.appendChild(li); // append li to ul
	});
};

navList();

// make section active
const makeActive = () => {
	const menuLinks = document.querySelectorAll('.menu__link');
	for (const section of sections) {
		const rect = section.getBoundingClientRect();
		// console.log(rect);

		// check if its in viewport
		if (rect.top <= 400 && rect.bottom >= 370) {
			section.classList.add('your-active-class');
			for (const menuLink of menuLinks) {
				if (menuLink.textContent === section.dataset.nav) {
					menuLink.classList.add('active');
				} else {
					menuLink.classList.remove('active');
				}
			}
		} else {
			section.classList.remove('your-active-class');
		}
	}
};

// toggle navigation
const toggleNavigation = () => {
	const header = document.querySelector('header');
	if (window.pageYOffset >= ul.offsetTop) {
		header.classList.add('fixed_nav');
	} else {
		header.classList.remove('fixed_nav');
	}
};

window.addEventListener('scroll', function () {
	makeActive();
	toggleNavigation();
});
