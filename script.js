// ANIMATION FOR SIGN IN/UP PAGE
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// HAMBURGER MENU FOR MOBILE
function toggleMenu() {
	const menu = document.querySelectorAll('.menu-links, .harmburger-icon');
	
	menu.forEach(element =>{
	  element.classList.toggle("open");
	})
  }

  document.addEventListener("click", function (event) {
    const menu = document.querySelector(".menu-links");

    if (!menu.contains(event.target)) {
        menu.classList.toggle("open");
    }
});

function toggle_Sub_menu(){
const sub_menu = document.getElementById('sub_menu');
const sub = document.getElementById('sub');

sub.classList.toggle("open")
}




