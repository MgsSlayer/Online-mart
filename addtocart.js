const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemID) {

fetch(`https://magbeads-backend.onrender.com/product/${itemID}`)
.then((res) => res.json())
.then((product) => {
// const cart = JSON.parse(localStorage.getItem('cart')) || [];


const existing = cart.find((item) => item._id === product._id)
if(existing){
    existing.quantity += 1
}else{
    cart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
    })
}

localStorage.setItem('cart', JSON.stringify(cart));
alert('item added to cart')

console.log(cart);
updateCartCount();
})

}

function updateCartCount() {
    let total_cart_count = 0;
    cart.forEach((item) => {
        total_cart_count += item.quantity;
    })
document.querySelector('.cart_count').textContent = total_cart_count;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount()
})



//Event listener for button to add to cart
document.addEventListener('click', function(event){
     const button = event.target.closest('.add_to_cart');
 if(button){

    const product_id = button.dataset.id;
    addToCart(product_id);
    
 }
})