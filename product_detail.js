console.log(window.location.href);
console.log(window.location.search);
//FETCH PRODUCT AND DISPLAY DETAILS
const params = new URLSearchParams(window.location.search);
const itemID = params.get("id");

fetch(`https://magbeads-backend.onrender.com/products/${itemID}`)
  .then((res) => res.json())
  .then((item) => {
    const image = document.getElementById("pimage");
    const imageCon = document.getElementById("image_container");
    const name = document.getElementById("product_name");
    const price = document.getElementById("product_id");
    const details = document.getElementById("product_desc_page");

    image.src = `${item.image}`;
    imageCon.style.background = `url("${item.image}")`
    imageCon.style.backgroundSize = "cover";
    imageCon.style.backgroundPosition = "center";
    name.innerHTML = `${item.name}`;
    price.innerHTML = `₦${item.price}`;
    details.innerHTML = `${item.description}`;
    console.log(item);
  })
  .catch((err) => {
    console.log(`${err.name}`);
  });

function toggleMenu() {
	const menu = document.querySelectorAll('.menu-links');
	
	menu.forEach(element =>{
	  element.classList.toggle("open");
	})
  }

function toggle_Sub_menu() {
  const sub = document.getElementById("sub");

  sub.classList.toggle("open");
}

