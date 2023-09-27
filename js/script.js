document.addEventListener("DOMContentLoaded", function () {
	Alpine.data("todoApp", function () {
		return {
			theme: true,
			checkbox: false,
			direction: "ltr",
			todos: [],
			inputTodo: "",
			show: "all",
			selectedCategory: "work",

			addTodo() {
				if (this.inputTodo.trim().length) {
					this.todos.push({
						name: this.inputTodo,
						completed: false,
						category: this.selectedCategory,
					});
					this.inputTodo = "";
				}
			},

		};
	});
});

//When your page is fully loaded
window.addEventListener("load", function () {
	// Create a GSAP timeline
	const tl = gsap.timeline();

	// Add fade-in animation for the title
	tl.to("#title", { opacity: 1, duration: 2 });

	// Add fade-in animation for the sun icon
	tl.to("#sun-icon", { opacity: 1, duration: 1 }, "-=2"); // Start after the title animation

	// Add fade-in animation for the direction icon
	tl.to("#direction-icon", { opacity: 1, duration: 1 }, "-=2"); // Start after the sun icon animation
});


