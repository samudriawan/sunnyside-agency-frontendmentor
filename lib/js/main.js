const menuToggler = document.getElementById('menu-toggler');
const navMenu = document.querySelector('.nav-menu');

menuToggler.addEventListener('click', function () {
	// if (navMenu.style.left == '50em') {
	// 	menuToggler.style.opacity = '0.5';
	// 	navMenu.style.left = '0';
	// } else {
	// 	menuToggler.style.opacity = '1';
	// 	navMenu.style.left = '50em';
	// }
	navMenu.classList.toggle('show');
});

// close nav menu when nav link is clicked
const navLink = document.querySelectorAll('.nav-link');
for (let i = 0, j = navLink.length; i < j; i++) {
	navLink[i].addEventListener('click', function () {
		navMenu.classList.toggle('show');
		// navMenu.style.left = '50em';
		// menuToggler.style.opacity = '1';
	});
}

// close nav menu when click outside nav menu area
// document.addEventListener('click', function (e) {
// 	if (e.target.closest('.nav-menu') == null && navMenu.classList.contains('show')) {
// 		navMenu.classList.toggle('show');
// 		// navMenu.style.left = '50em';
// 		// menuToggler.style.opacity = '1';
// 	}
// 	console.log(e.target.closest('.nav-menu'));
// });
