console.log(window.location.href);
console.log(window.location.search);
//FETCH PRODUCT AND DISPLAY DETAILS
const params = new URLSearchParams(window.location.search);
const itemID = params.get("id");

fetch(`https://magbeads-backend.onrender.com/products/${itemID}`)
  .then((res) => res.json())
  .then((item) => {
    const image = document.getElementById("image_container");
    const name = document.getElementById("product_name");
    const price = document.getElementById("product_price");
    const details = document.getElementById("product_desc");

    image.style.background = `url('${item.image}')`;
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center";
    name.innerHTML = `${item.name}`;
    price.innerHTML = `${item.price}`;
    details.innerHTML = `${item.description}`;
    console.log(item);
  })
  .catch((err) => {
    console.log(`${err.name}`);
  });
