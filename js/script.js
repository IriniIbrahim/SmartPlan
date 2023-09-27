window.addEventListener("load", function () {
	const todoform = document.querySelector("#todoform");
	const controls = document.querySelector("#controls");
	const title = document.querySelector("#title");
	const sunicon = document.querySelector("#sun-icon");
	const directionicon = document.querySelector("#direction-icon");

	const initialAnimation = gsap.timeline();

	initialAnimation.from(title, { duration: 0.5, y: -150, ease: 'power2.inOut' });
	initialAnimation.from(sunicon, { duration: 0.5, y: -150, ease: 'power2.inOut' });
	initialAnimation.from(directionicon, { duration: 0.5, y: -150, ease: 'power2.inOut' });
	initialAnimation.from(todoform, { duration: 0.5, x: 1220, ease: 'power2.inOut' });

	// Ensure the controls element is visible before animating
	gsap.set(controls, { visibility: 'visible' });
	initialAnimation.from(controls, { duration: 0.5, x: -1400, ease: 'power2.inOut' });
});
