

function display_cart() {
// const cart = JSON.parse(localStorage.getItem("cart")) || [];
   const cart_div =  document.querySelector(".cart_page_left_main");
   const each_item = document.createElement("div");
   each_item.className = "each_item";
   if (!cart) return;
   if (!cart.length) {
    cart_div.innerHTML = "Your cart is currently empty";
    return;
   }
   
   cart_div.innerHTML = cart.map((item) => {
    const itemtotal = item.price * item.quantity;
   return `
   <div class="each_item">
                        <div class="cart_page_left_top">
                            <div class="cart_page_img"><img src="${item.image}" class="cart_page_item_image"></div>
                            <div class="cart_page_item_dets">
                                <h3>${item.name}</h3>
                                <p>Size: Small</p>
                                <p>In Stock</p>
                            </div>
                            <div class="each_items">
                                <h4>Each</h4>
                                <p class="cart_page_item_price">${item.price}</p>
                            </div>
                            <div class="quantity_items">
                                <h4>Quantity</h4>
                                <input type="number" class="cart_page_item_quantity" value="${item.quantity}">
                            </div>
                            <div class="total_item">
                                <h4>Total</h4>
                                <p class="cart_page_item_total">${itemtotal}</p>
                            </div>

                            
                        </div>
                        <div class="item_action_options">
                                <i class="fa fa-heart norm_size" style="color: red;" ></i>
                                <p>Edit</p>
                                <p>Remove</p>
                        </div>
                    </div>
   
    `
}).join('')
}


// function calculate_item_total(){
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.forEach((obj) => {
        
//         const item_price_total = obj.quantity * obj.price;  
//         return item_price_total 
        // const quantity_field = document.querySelector(".cart_page_item_total");
        // quantity_field.innerHTML = item_price_total;   
    // });
    



// }



