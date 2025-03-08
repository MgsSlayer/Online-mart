// ANIMATION FOR SIGN IN/UP PAGE (DESKTOP)
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
// ANIMATION FOR SIGN IN/UP PAGE (MOBILE)
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "-15px";
    z.style.left = "120px";
}

function login(){
    x.style.left = "-15px";
    y.style.left = "450px";
    z.style.left = "0px";
}

// HAMBURGER MENU FOR MOBILE
function toggleMenu() {
	const menu = document.querySelectorAll('.menu-links, .hamburger-icon');
	
	menu.forEach(element =>{
	  element.classList.toggle("open");
	})
  }

  document.addEventListener("click", function (event) {
    const menu = document.querySelector(".menu-links");

    if (!menu.contains(event.target)) {
        menu.classList.remove("open");
    }
});

function toggle_Sub_menu(){
const sub_menu = document.getElementById('sub_menu');
const sub = document.getElementById('sub');

sub.classList.toggle("open")
}

const desk_menu = document.querySelector(".sub-item");
const desk_submenu = document.querySelector(".sub-list");

desk_menu.addEventListener("mouseenter", ()=>{
  desk_submenu.style.display = "flex";
});

desk_menu.addEventListener("mouseleave", ()=>{
  setTimeout(()=>{ 
    if (!desk_submenu.matches(":hover")){
    desk_submenu.style.display = "none";
  }}, 5000);
 
});

desk_submenu.addEventListener("mouseenter", () => {
  desk_submenu.style.display = "flex"; // Ensures submenu stays open when hovered
}); 

